import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Login from './views/Login';
import Register from './views/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const someData=[];
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen name="Login" component={Login}
          options={{ title: 'Login' }} /> */}
        <Stack.Screen name="Login">
          {props => <Login {...props} extraData={someData} />}
        </Stack.Screen>
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
