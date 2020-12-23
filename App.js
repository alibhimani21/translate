import React from 'react'
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
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Text" component={Text} />
        <Stack.Screen name="Speech" component={Speech} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

