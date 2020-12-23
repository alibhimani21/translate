import * as React from 'react'
import { View, Text as RNText, StyleSheet, Button } from 'react-native'

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

export default function Text({ navigation }) {
  return (
    <View style={styles.container}>
      <RNText style={styles.font}>Hello, World!</RNText>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
      <Button onPress={() => navigation.navigate('Details')} title="Details" />
    </View>

  )
}