import React from "react";
import {
  addPokemonFavoriteApi,
  getPokemonsFavoriteApi,
} from "../../api/favorite";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Favorite(props) {
  const { id } = props;
  const addFavorites = async () => {
    await addPokemonFavoriteApi(id);
    console.log("Añadir a favoritos ", id);
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorites}
      style={{ marginRight: 20 }}
    />
  );
}
