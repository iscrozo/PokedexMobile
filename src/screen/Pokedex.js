import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/pokemonList";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  const [nextUrl, setNextUrl] = useState(null);
  //console.log("Pokemons --> ", pokemons);

  useEffect(() => {
    //console.log("hola mundo");
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      //console.log(response);
      setNextUrl(response.next);

      const pokemonsArray = [];
      for await (pokemonItem of response.results) {
        //console.log(pokemonItem.url);
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemonItem.url);
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
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log("Pokedex - error ->", error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemonData={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}

export default Pokedex;
