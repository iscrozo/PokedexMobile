import React, { useState, useEffect, useCallback } from "react"; // , { useState, useEffect }
import { SafeAreaView, Text, Button } from "react-native";
import { getPokemonsFavoriteApi } from "../api/favorite";
import useAuth from "../hooks/useAuth";
import { getPokemonDetailsApi } from "../api/pokemon";
import PokemonList from "../components/pokemonList";
import { useFocusEffect } from "@react-navigation/native";

function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  console.log(pokemons);

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();

          const pokemonsArray = [];
          for await (const id of response) {
            //console.log(pokemonItem.url);
            const pokemonDetails = await getPokemonDetailsApi(id);
            //console.log(pokemonDetails);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              imagen:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }

          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? (
    <Text>Usuario no logeado </Text>
  ) : (
    <PokemonList pokemonData={pokemons} />
  );
}

export default Favorite;
