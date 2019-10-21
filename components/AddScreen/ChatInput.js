import React from 'react'
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native'

export default ({ send, change, value }) =>
  <View style={styles.wrapper}>
    <TextInput
      style={styles.input}
      multiline
      onChangeText={text => change(text)}
      value={value}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={send}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  </View>

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    padding: 10,
    borderTopColor: '#e5e5e5',
    borderTopWidth: 2
  },
  input: {
    padding: 10,
    borderRadius: 4,
    minHeight: 40,
    maxHeight: 100,
    fontSize: 18,
    flex: 1,
    backgroundColor: '#efefef',
    marginRight: 10,
  },
  button: {
    borderRadius: 4,
    height: 45,
    paddingHorizontal: 20,
    backgroundColor: '#0095ff',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700'
  }
})
