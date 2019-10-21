import React from 'react'
import { View } from 'react-native'

export default class NowBar extends React.Component {
  state = {
    barPosition: 0
  }

  componentDidMount() {
    const now = new Date()
    this.setState({ barPosition: ((now.getHours() + (now.getMinutes() / 60)) * 60) + 20 })

    this._interval = setInterval(() => {
      this.setState({ barPosition: this.state.barPosition + 1 })
    }, 60000)
  }

  componentWillUnmount() {
    clearInterval(this._interval)
  }

  render() {
    return(
      <View
        style={{
          position: 'absolute',
          top: this.state.barPosition,
          width: '100%',
          height: 1,
          backgroundColor: '#ffa5007d',
          zIndex: 2
        }}
      >
        <View style={{
          width: 10,
          height: 10,
          borderRadius: 50,
          backgroundColor: '#ffa5007d',
          position: 'absolute',
          left: -8,
          top: -5
        }}></View>
      </View>
    )
  }
}
