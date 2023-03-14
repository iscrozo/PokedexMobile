import React from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import PokemonCard from "./PokemonCard";

function pokemonList(props) {
  //console.log(props);
  const { pokemonData } = props;
  //(pokemonData);

  const loadMore = () => {
    console.log("Cargando mas pokemons...");
  };
  return (
    <FlatList
      data={pokemonData}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator
          size="large"
          style={styles.spinner}
          color="#AEAEAE"
        />
      }
    />
  );
}

export default pokemonList;

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
