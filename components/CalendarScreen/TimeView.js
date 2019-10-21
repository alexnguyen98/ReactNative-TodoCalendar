import React from 'react'
import { ScrollView, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import TimeCol from './TimeCol'
import DrawGrid from './DrawGrid'

const 
  now = new Date(),
  barPosition = ((now.getHours() + (now.getMinutes() / 60)) * 60) - 20  

// scroll position when on absolute top or bottom

export default () => {
  const 
    todaysTags = useSelector(state => state.tags.todaysTags),
    dispatch = useDispatch()
  
  // dispatch({ type:'RESET_T_TAG'})
  // dispatch({ type:'RESET_TODO'})
  if (todaysTags.length) {
    let curTime = todaysTags[todaysTags.length - 1].date
    if (curTime !== `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`) {
      dispatch({ type:'ADD_TAG'})
    }
  }
  return(
    <ScrollView 
      ref={ref=>{ this.scrollView = ref}}
      onContentSizeChange={() => {
        this.scrollView.scrollTo({y: barPosition, animated: false})
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <TimeCol/>
        <View style={{ flex: 1 }}>
          <DrawGrid/>
        </View>
      </View>
    </ScrollView>
  )
}
