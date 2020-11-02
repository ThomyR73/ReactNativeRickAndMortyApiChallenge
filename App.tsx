import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home/Home'
import CardsList from './components/CardsList/CardsList'
import Modal from './components/Modal/Modal'


import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'

interface Character {
  name: string;
  image: string;
  id: string
}

type RootStackParamList = {
  Home: undefined;
  Characters: undefined;
  Locations: undefined;
  Episodes: undefined;
  Modal: {
    name: string;
    img?: string,
    type?: string,
    gender?: string,
    species?: string,
    dimension?: string,
    characters?: Array<Character>,
    episode?: string,
    date?: string,
    modalType: string
  }
};

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Characters" component={CardsList} options={{ headerShown: false }} />
          <Stack.Screen name="Locations" component={CardsList} options={{ headerShown: false }} />
          <Stack.Screen name="Episodes" component={CardsList} options={{ headerShown: false }} />
          <Stack.Screen name="Modal" component={Modal} options={{ headerShown: true, title: "" }} />

        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
