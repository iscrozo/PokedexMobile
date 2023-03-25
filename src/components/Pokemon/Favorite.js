import React, { useState, useEffect } from "react";
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "../../api/favorite";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);

  const [reloadCheck, setReloadCheck] = useState(false);

  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
        throw error;
      }
    })();
  }, [id, reloadCheck]);

  const onReloadChecFavorite = () => {
    setReloadCheck((prev) => !prev);
  };

  const addFavorites = async () => {
    try {
      await addPokemonFavoriteApi(id);
      onReloadChecFavorite();
    } catch (error) {
      console.log(error);
    }
    console.log("Añadir a favoritos ", id);
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      onReloadChecFavorite();
      console.log("Eliminar de favoritos");
    } catch (error) {
      throw error;
    }
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorites}
      style={{ marginRight: 20 }}
    />
  );
}
