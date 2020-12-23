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

export default function Speech ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Speech</Text>
      <Button onPress={() => navigation.navigate('Text')} title="Submit recording"></Button>
    </View>
  )
}