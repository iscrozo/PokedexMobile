import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screen/Account";

const Stack = createStackNavigator();

function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Usuario" }}
      />
    </Stack.Navigator>
  );
}

export default AccountNavigation;
