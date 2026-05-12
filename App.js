import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home';
import Secretaria from './screens/secretaria'; 
import Calendario from './screens/calendario';
import Links from './screens/links'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Secretaria" component={Secretaria} />
        <Stack.Screen name="calendario" component={Calendario} /> 
        <Stack.Screen name="Links" component={Links} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}