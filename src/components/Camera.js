import * as React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

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

export default function Camera({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Camera</Text>
      <Button onPress={() => navigation.navigate('Text')} title="Submit image"></Button>
    </View>
  )
}