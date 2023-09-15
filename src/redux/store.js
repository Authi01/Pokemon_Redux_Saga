import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import pokemonReducer from "./pokemonReducer";
import { fetchPokemon } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  middleware: [sagaMiddleware],
});

// the saga used here is fetchPokemon
sagaMiddleware.run(fetchPokemon);

export default store;
