import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './navigation/Tabs';
import {Login, Onboarding, Register} from './screens';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} hidden={true} />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Onboarding'}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
