import React, { useState } from 'react'
import { View, Text as RNText, TextInput, StyleSheet, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'

export default function Text({ navigation }) {
  const [languages, setLanguages] = useState({
    from: 'french',
    to: 'english'
  })
  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.languages}>
        <Picker
          selectedValue={languages.from}
          onValueChange={(from) => setLanguages(prev => ({ ...prev, from }))}
          style={styles.picker}
        >
          <Picker.Item label="French" value="french" />
          <Picker.Item label="English" value="english" />
        </Picker>
        <Picker
          selectedValue={languages.to}
          onValueChange={(to) => setLanguages(prev => ({ ...prev, to }))}
          style={styles.picker}
        >
          <Picker.Item label="French" value="french" />
          <Picker.Item label="English" value="english" />
        </Picker>
      </View>
      <RNText style={styles.font}>Translate</RNText>
      <TextInput 
        placeholder={'Translate here'}
        placeholderTextColor={'grey'}
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Button onPress={() => navigation.navigate('Speech')} title="Speech" />
      <Button onPress={() => navigation.navigate('Camera')} title="Camera" />
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
  languages: {
    flexDirection: 'row',
    marginBottom: 100
  },
  imput: { 
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