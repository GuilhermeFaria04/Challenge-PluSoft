import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Header from './components/Header';
import Carrinho from './pages/Carrinho';
import Favortios from './pages/Favoritos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ header: () => <Header /> }}
        />
        <Stack.Screen
          name="Carrinho"
          component={Carrinho}
          options={{ header: () => <Header /> }}
        />
        <Stack.Screen
          name="Favoritos"
          component={Favortios}
          options={{ header: () => <Header /> }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
