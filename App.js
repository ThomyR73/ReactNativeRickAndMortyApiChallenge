import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Text, View } from 'react-native';

import Home from './components/Home'
import Chars from './components/Chars'
import Location from './components/Location'
import Episodes from './components/Episodes'
import CharsModal from './components/modals/charsModal'
import EpisodeModal from './components/modals/episodeModal'
import LocationModal from './components/modals/locationModal'


import { ApolloProvider } from '@apollo/client'
import client from './config/apollo'


const Stack = createStackNavigator()

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Chars" component={Chars} options={{ headerShown: false }} />
          <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
          <Stack.Screen name="Episodes" component={Episodes} options={{ headerShown: false }} />
          <Stack.Screen name="CharsModal" component={CharsModal} options={{ headerShown: true, title: "" }} />
          <Stack.Screen name="EpisodeModal" component={EpisodeModal} options={{ headerShown: true, title: "" }} />
          <Stack.Screen name="LocationModal" component={LocationModal} options={{ headerShown: true, title: "" }} />

        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
