import React from 'react'
import { View, StatusBar, Platform } from 'react-native'

const statusHeight = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight

export default () =>
  <View style={{
    height: statusHeight,
    backgroundColor: '#1c2027'
  }}></View>
