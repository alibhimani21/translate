import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/components/Home'
import Text from './src/components/Text'
import Speech from './src/components/Speech'
import Camera from './src/components/Camera'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content'/>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#222222',
            borderColor: '#222222',
            borderBottomColor: '#222222',
            shadowColor: '#222222'
          },
          headerTintColor: '#ff5f5c'
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: ''
          }} />
        <Stack.Screen
          name="Text"
          component={Text}
          options={{
            title: ''
          }} />
        <Stack.Screen
          name="Speech"
          component={Speech}
          options={{
            title: ''
          }} />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{
            title: ''
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

