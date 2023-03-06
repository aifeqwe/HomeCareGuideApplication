import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPage from './SearchPage';
import SearchResultPage from './SearchResultPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchPage">
        <Stack.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false }} />
        <Stack.Screen name="SearchResultPage" component={SearchResultPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;