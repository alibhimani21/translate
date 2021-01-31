import React, { useState } from 'react'
import {
  View,
  Text as RNText,
  TextInput,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native'


export default function Text({ navigation }) {
  const [text, setText] = useState('')
  const [isFocused, setFocus] = useState(false)
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior='height'>
        <View style={styles.container}>
          <RNText style={styles.font}>Translate</RNText>
          <TextInput
            multiline
            placeholder={'Enter text'}
            placeholderTextColor={'grey'}
            value={text}
            onChangeText={setText}
            style={[isFocused ? styles.inputOnFocus : styles.input]}
            returnKeyType={'done'}
            keyboardAppearance={'dark'}
            onFocus={() => setFocus(true)}
            onBlur={() => {
              setFocus(false)
              console.log('blurred')
            }
            }
          />
          <Button onPress={() => {
            navigation.navigate('Speech')
          }
          } title="Speech" />
          <Button onPress={() => navigation.navigate('Camera')} title="Camera" />
        </View>
      </KeyboardAvoidingView>
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
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 15,
    paddingTop: 10,
    width: 300,
    height: 60,
    color: 'white'
  },
  inputOnFocus: {
    borderWidth: 1,
    borderColor: '#ff5f5c',
    borderRadius: 15,
    padding: 15,
    paddingTop: 10,
    width: 300,
    height: 200,
    color: 'white'
  },
  font: {
    color: '#ff5f5c',
    fontSize: 30
  }
})