import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

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

export default function Details ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Details</Text>
      <Button onPress={() => navigation.navigate('Text')} title="Text"></Button>
      <Button onPress={() => navigation.navigate('Home')} title="Home"></Button>

    </View>
  )
}