import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import TypePokemon from "../components/Pokemon/Type";
import StatsPokemon from "../components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";

function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon name="love" color="#fff" size={20} style={{ marginRight: 20 }} />
      ),

      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        ></Icon>
      ),
    });
    //console.log(response);
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  // console.log(params.id);

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <TypePokemon types={pokemon.types}></TypePokemon>
      <StatsPokemon stats={pokemon.stats} />
    </ScrollView>
  );
}

export default Pokemon;
