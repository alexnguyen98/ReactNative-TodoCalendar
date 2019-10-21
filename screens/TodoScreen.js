import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import ToDoList from '../components/ToDoScreen/List'

export default () =>
  <KeyboardAvoidingView 
    behavior="height" 
    keyboardVerticalOffset={20}
    style={{
      flex: 1,
      backgroundColor: '#1c2027',
      padding: 20
    }}
  >
    <ToDoList/>
  </KeyboardAvoidingView>
