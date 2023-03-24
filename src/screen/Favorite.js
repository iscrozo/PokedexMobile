import React from "react"; // , { useState, useEffect }
import { SafeAreaView, Text, Button } from "react-native";
import { getPokemonsFavoriteApi } from "../api/favorite";

function Favorite() {
  // const [favorites, setFavorites] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const response = await getPokemonsFavoriteApi();
  //     console.log("response");
  //   })();
  // }, []);

  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  );
}

export default Favorite;
