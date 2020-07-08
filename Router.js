import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Splash from "./src/screens/Splash";

const AuthStack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName={"Splash"} headerMode={"float"}>
        <AuthStack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
