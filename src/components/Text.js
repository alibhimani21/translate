import React, { useState } from 'react'
import {
  View,
  Text as RNText,
  TextInput,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'


export default function Text({ navigation }) {
  const [text, setText] = useState('')
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <RNText style={styles.font}>Translate</RNText>
        <TextInput
          placeholder={'Translate here'}
          placeholderTextColor={'grey'}
          style={styles.input}
          value={text}
          onChangeText={setText}
          returnKeyType={'go'}
          keyboardAppearance={'dark'}
        />
        <Button onPress={() => {
          navigation.navigate('Speech')
          console.log('hello')
        }
        } title="Speech" />
        <Button onPress={() => navigation.navigate('Camera')} title="Camera" />
      </View>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center'
  },
  languages: {
    flexDirection: 'row',
    marginBottom: 100
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    width: 200,
    height: 50,
    textAlign: 'center',
    color: 'white'
  },
  font: {
    color: 'white'
  },
  picker: {
    height: 50,
    width: 100
  }
})