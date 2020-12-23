import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function App() {
  const [value, onChangeText] = React.useState('')
  console.log(value)
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Home!</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, color: 'white' }}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={'Hello Julian!'}
        placeholderTextColor={'yellow'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center'
  },
  font: {
    color: 'white'
  }
})
