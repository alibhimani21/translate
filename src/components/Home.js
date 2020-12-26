import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    justifyContent: 'space-evenly',
    alignItems: 'center'
    // paddingTop: 150
  },
  title: {
    color: '#ff5f5c',
    fontSize: 40
  },
  buttonsGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 400,
    marginTop: 450
  },
  button: {
    padding: 50
  }
})

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Translate</Text>
      <View style={styles.buttonsGroup}>
        <Button color='#ff5f5c' style={styles.button} onPress={() => navigation.navigate('Text')} title="Text"></Button>
        <Button color='#ff5f5c' style={styles.button} onPress={() => navigation.navigate('Speech')} title="Speech"></Button>
        <Button color='#ff5f5c' style={styles.button} onPress={() => navigation.navigate('Camera')} title="Camera"></Button>
      </View>
    </View>
  )
}