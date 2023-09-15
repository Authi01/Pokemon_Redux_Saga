import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import getImageUrl from "../Utils/ImageUrl";
import { useDispatch, useSelector } from "react-redux";

const ProductDescriptionPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const pokemonDetails = useSelector((state) => state.pokemon.details);

  useEffect(() => {
    // Dispatch the action to fetch Pokemon details
    dispatch({ type: "FETCH_POKEMON_DETAILS", payload: name });
  }, []);
  // if the data is fetched successfully , we dispatch the setPokemonList action-
  // with the data as its payload

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <div className="pokemon-card">
        <div className="pokemon-image">
          <img
            src={getImageUrl(pokemonDetails?.id)}
            className="img-fluid rounded"
            alt={pokemonDetails?.name}
          />
        </div>
        <div className="pokemon-info">
          <h1 className="title">{pokemonDetails?.name}</h1>{" "}
          <div className="details">
            <strong>Height:</strong> {pokemonDetails?.height} decimetres{" "}
          </div>
          <div className="details">
            <strong>Weight:</strong> {pokemonDetails?.weight} hectograms{" "}
          </div>
          <div className="details">
            <strong>Abilities:</strong>
            <ul>
              {pokemonDetails?.abilities.map((ability) => (
                <li key={ability.ability.name} className="list-item">
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="details">
            <strong>Forms:</strong>
            <ul>
              {pokemonDetails?.forms.map((form) => (
                <li key={form?.name} className="list-item">
                  {" "}
                  {form?.name}
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="back-link">
            <button className="back-button">Back to PLP</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
