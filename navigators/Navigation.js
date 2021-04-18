import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Views/Login";
import Register from "./Views/Register";

const Stack = createStackNavigator();

export default function Nested() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}