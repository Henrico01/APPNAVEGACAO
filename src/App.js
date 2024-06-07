// In App.js in a new project

import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from
'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './views/HomeScreen';
import SobreScreen from './views/SobreScreen';
import ProdutoScreen from './views/ProdutoScreen';
import ContatoScreen from './views/ContatoScreen';


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component=
      {HomeScreen} 
      options={{
        tabBarIcon: ({color, size }) => (
           <MaterialCommunityIcons name="home" color={color} size={size} /> 
        ),}}
      />
      <Tab.Screen name="Sobre" component=
      {SobreScreen} />
      <Tab.Screen name="Produtos" component=
      {ProdutoScreen} />
      <Tab.Screen name="Contato" component=
      {ContatoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}



export default App;