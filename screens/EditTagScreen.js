import React from 'react'
import { View, FlatList, StyleSheet, Text, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'

export default ({navigation}) => {
  
  const {tags} = navigation.state.params
  const dispatch = useDispatch()

  function updateTag(item,num) {
    if (!num)
      num = null
    dispatch({ type: 'UPDATE_T_TAG', payload: { 
      tag: item,
      value: num
    }})
  }

  return(
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      padding: 10
    }}>
      <FlatList
        data={tags}
        renderItem={({item, index}) => 
          <View 
            key={index}
            style={styles.wrapper} 
            >
            <Text
              onPress={() => addText(item)}
              style={styles.text} 
            >{item.tag}</Text>
            <TextInput
              keyboardType='numeric'
              defaultValue={item.value}
              onChangeText={num => updateTag(item,num)}
              maxLength={2}
              style={styles.input}
            />
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center'
  },
  text: {
    color: '#000000d6',
    width: '100%',    
    fontSize: 18,
    fontWeight: '700',
    flex: 1
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    fontSize: 16,
    marginLeft: 10,
    width: 40
  }
})