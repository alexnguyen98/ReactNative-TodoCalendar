import React from 'react'
import { StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native'

export default ({ usedTags, addText, removeUsedTag }) => 
  <FlatList 
    data={usedTags}
    renderItem={
      ({item,index}) =>
      <View 
        style={styles.wrapper}
        key={index}
      >
        <Text
          onPress={() => addText(item)}
          style={styles.tag} 
        >{item}</Text>
        <TouchableOpacity onPress={() => removeUsedTag(item)}>
          <Text style={styles.button}>Delete</Text>
        </TouchableOpacity>
      </View>
    }
  >
  </FlatList>

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  tag: {
    color: '#000000d6',
    width: '100%',    
    fontSize: 18,
    fontWeight: '700',
    flex: 1
  },
  button: {
    color: 'grey',
    fontWeight: '700'
  }
})
