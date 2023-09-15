import { createReducer } from "@reduxjs/toolkit";
import { setPokemonList, setPokemonDetails } from "./pokemonAction";

// initial state
const initialState = {
  list: [],
  details: null,
};

// takes the initial state and the action handlers ()
const pokemonReducer = createReducer(initialState, {
  [setPokemonList]: (state, action) => {
    state.list = action.payload; // updates the list property with actionpayload
    // this is called when action with setPokemonList is dispatched
  },
  [setPokemonDetails]: (state, action) => {
    state.details = action.payload;
    //called when action setPokemonDeatils is dispatched
  },
});

export default pokemonReducer;
