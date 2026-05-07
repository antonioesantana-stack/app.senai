import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando suas telas (sempre com letra maiúscula!)
import Home from './screens/home';
import Secretaria from './screens/secretaria'; // O arquivo pode ser minúsculo, mas o componente é Maiúsculo!

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Aqui o sistema chama a sua tela Home que está lá na pasta screens */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Secretaria" component={Secretaria} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}