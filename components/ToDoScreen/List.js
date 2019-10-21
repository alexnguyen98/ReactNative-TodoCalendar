import React, { useState } from 'react'
import { View, TouchableHighlight, Text, TextInput } from 'react-native'
import SortableListView from 'react-native-sortable-listview'
import { useSelector, useDispatch } from 'react-redux'

export default () => {
  const 
    [task, setTask] = useState({text:null}),
    data = useSelector(state => state.todo.todo),
    dispatch = useDispatch(),
    dataObject = data.reduce((a,b) => {
      a[b.text] = b
      return a
    },{}),
    dataArr = Object.keys(dataObject)

  function sortData(e) {
    dispatch({ type:'UPDATE_TODO', payload: { to: e.to, from: e.from } })
  }
  
  function addTask() {
    if(!task.text)
      return
    dispatch({ type: 'ADD_TODO', payload: task })
    setTask(prevState => ({...prevState, text: null}))
  }

  function addDone(item) {
    dispatch({ type: 'ADD_DONE', payload: item })
  }
  
  return(
    <View style={{ flex: 1 }}>
      <SortableListView
        data={dataObject}
        order={dataArr}
        activeOpacity={1}
        onRowMoved={e => sortData(e)}
        renderRow={item =>
          <TouchableHighlight 
            {...this.sortHandlers}
          >
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <TouchableHighlight onPress={() => addDone(item)}>
                <View
                  style={{ 
                    width: 18,
                    height: 18,
                    borderWidth: 1,
                    borderColor: '#787f8a',
                    marginRight: 20,
                    borderRadius: 50,
                  }}
                ></View>
              </TouchableHighlight>
              <Text
                style={{
                  fontSize: 20,
                  color: '#c2ccda',
                  flex: 1
                }}
              >{item.text}</Text>
            </View>
          </TouchableHighlight>
        }
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}
      >
        <TextInput
          style={{ 
            fontSize: 18,
            flex: 1,
            color: '#c2ccda',
          }}
          placeholder="What to do..."
          placeholderTextColor = "#686e75"
          value={task.text}
          onChangeText={todo => setTask({...task, text: todo})}
        />
        <TouchableHighlight onPress={() => addTask()}>
          <Text
            style={{
              color: '#11b8d896',
              fontSize: 18,
              fontWeight: '700'
            }}
          >Save</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
