import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteScreen from "../screen/Favorite";
import AccountScreen from "../screen/Account";
import PokedexScreen from "../screen/Pokedex";

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={FavoriteScreen}></Tab.Screen>
      <Tab.Screen name="Pokedex" component={PokedexScreen}></Tab.Screen>
      <Tab.Screen name="Account" component={AccountScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default Navigation;
