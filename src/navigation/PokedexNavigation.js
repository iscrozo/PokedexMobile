import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from "../screen/Pokedex";
import PokemonScreen from "../screen/Pokemon";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokemon" component={PokemonScreen} />
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: "Pokedex" }}
      />
    </Stack.Navigator>
  );
}
