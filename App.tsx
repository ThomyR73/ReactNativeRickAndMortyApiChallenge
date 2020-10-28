import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home'
import Chars from './components/Chars'
import Location from './components/Location'
import Episodes from './components/Episodes'
import Modal from './components/Modal'


import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'

interface Characters {
  name: string;
  image: string;
  id: string
}

type RootStackParamList = {
  Home: undefined;
  Chars: undefined;
  Location: undefined;
  Episodes: undefined;
  Modal: {
    name: string;
    img?: string,
    type?: string,
    gender?: string,
    species?: string,
    dimension?: string,
    characters?: Array<Characters>,
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
          <Stack.Screen name="Chars" component={Chars} options={{ headerShown: false }} />
          <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
          <Stack.Screen name="Episodes" component={Episodes} options={{ headerShown: false }} />
          <Stack.Screen name="Modal" component={Modal} options={{ headerShown: true, title: "" }} />

        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
