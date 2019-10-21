import React from 'react'
import { View, Text } from 'react-native'

let hours = []
for (let i = 0; i < 25; i++ ) {
  hours.push(
    <View 
      style={{
        position: 'relative',
        height: 60,
      }} 
    key={i}>
      <Text style={{
        position: 'absolute',
        top: -10,
        color: '#787f8a',
        fontSize: 13,
        textAlign: 'right',
        width: '100%'
      }}
      >{i}:00</Text>
    </View>
  )
}

export default () => 
  <View style={{ width: 55, paddingRight: 5, paddingTop: 20 }}>
    { hours }
  </View>
