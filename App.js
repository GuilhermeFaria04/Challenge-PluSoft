import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

