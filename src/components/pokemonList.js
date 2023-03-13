import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import PokemonCard from "./PokemonCard";

function pokemonList(props) {
  //console.log(props);
  const { pokemonData } = props;
  //(pokemonData);
  return (
    <FlatList
      data={pokemonData}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

export default pokemonList;

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
