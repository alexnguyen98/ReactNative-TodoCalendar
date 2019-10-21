import React from 'react'
import { View, TouchableWithoutFeedback, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

import NowBar from './NowBar.js'
import TodaysTags from './TodaysTags.js'
import ActionSheet from 'react-native-actionsheet'

let 
  grid = [],
  options = [
    'Rate tags',
    <Text style={{color: 'red', fontSize: 18 }}>Delete</Text>,
    'Cancel'
  ]

for (let i = 0; i < 25; i++ ) {
  grid.push(
    <View key={i} style={{ height: 60 }}>
      <View
        style={{
          borderTopColor: '#272e3a',
          borderTopWidth: 1,
          position: 'absolute',
          left: -10,
          right: 0,
          zIndex: 2
        }}
      ></View>
    </View>
  )
}

class DrawGrid  extends React.Component {
    
  preventMultiTouch = (func) => {
    if (!this.wasClicked) {
      this.wasClicked = true
      setTimeout(() => {
        this.wasClicked = false
      }, 400)
      func()
    }
  }

  openAddScreen = x => {
    const topHeight = x.nativeEvent.locationY - 20
      
    if (topHeight < 0)
      return

    this.preventMultiTouch(() => {
      const 
        a = topHeight / 60,
        h = Math.floor(a),
        m = a - h,
        d = new Date(),
        day = d.getDate(),
        month = d.getMonth() + 1,
        year = d.getFullYear()

      this.props.setEventTime({
        hours: h,
        minutes: Math.floor(m * 60),
        date: `${year}/${month}/${day}`
      })
      this.props.navigation.navigate('AddTagScreen')
    })
  }

  showActions = hour => {
    this.activeTime = hour
    this.ActionSheet.show()
  }

  getEditList = () => {
    return this.props.todaysTags.filter(i => i.hours == this.activeTime)
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.openAddScreen}>
        <View style={{ flex: 1, flexDirection: 'row', position: 'relative'}}>
          <View
            style={{
              borderRightColor: '#272e3a',
              borderRightWidth: 1,
              width: 10
            }}
          ></View>
          <View style={{ flex: 1, paddingTop: 20 }}>
            { grid }
            <TodaysTags 
              tags={this.props.todaysTags}
              showActions={this.showActions}  
            />
            <NowBar/>
          </View>
          <ActionSheet
            ref={o => this.ActionSheet = o}
            options={options}
            cancelButtonIndex={2}
            onPress={(index) => { 
              if(index === 0) this.props.navigation.navigate('EditTagScreen',{ tags: this.getEditList() }) 
              if(index === 1) this.props.deleteTags(this.activeTime)
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    ) 
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTags: hour => dispatch({type:'REMOVE_T_TAG', payload: hour}),
  setEventTime: curTime => dispatch({type:'SET_CURTIME', payload: curTime})
})

const mapStateToProps = state => ({
  todaysTags: state.tags.todaysTags
})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(DrawGrid))
