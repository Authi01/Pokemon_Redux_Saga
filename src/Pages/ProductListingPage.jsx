import React, { useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import getImageUrl from "../Utils/ImageUrl";
import { useDispatch, useSelector } from "react-redux";

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemon.list);

  useEffect(() => {
    if (!pokemonList || pokemonList.length === 0) {
      dispatch({ type: "FETCH_POKEMON_LIST" });
    }
  }, []);

  return (
    <div className="product-listing1">
      <h1 className="centered1">Pokemon List</h1>
      <div className="pokemon-grid1">
        {pokemonList.map((pokemon, index) => {
          const imageUrl = getImageUrl(index + 1);
          return (
            <PokemonCard key={index} pokemon={pokemon} imageUrl={imageUrl} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
