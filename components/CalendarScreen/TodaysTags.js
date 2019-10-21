import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default ({ tags, showActions }) => {
  const items = {}
  tags.forEach(i => {
    if (items[i.hours]) {
      items[i.hours].tags += `, ${i.tag}`
    } else {
      items[i.hours] = {
        tags: i.tag,
        position: (i.hours * 60) + 20
      }
    }
  })
  return Object.keys(items).map((key,i) =>
    <TouchableOpacity
      onPress={() => showActions(key)}
      key={i}
      style={{
        position: 'absolute',
        top: items[key].position,
        backgroundColor: '#39424e',
        width: '95%',
        padding: 7,
        paddingHorizontal: 15,
        borderRadius: 4,
      }}
    >
      <Text
        style={{
          color: '#dddddd',
          fontWeight: '700',
          fontSize: 15,
        }}
      >{items[key].tags}</Text>
    </TouchableOpacity>
  )
}
