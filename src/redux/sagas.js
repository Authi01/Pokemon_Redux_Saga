import { takeLatest, call, put } from "redux-saga/effects";
// takelatest listens for certain actions
// call - calls and then pauses the generator function till its completed
//put -dispatches actions within the generatorfucntion
import axios from "axios";
import { setPokemonList, setPokemonDetails } from "./pokemonAction";

//worker
function* fetchPokemonListSaga() {
  try {
    const response = yield call(
      () => axios.get("https://pokeapi.co/api/v2/pokemon/") // call, so the function waits till the api call is complete and stores it in response
    );
    yield put(setPokemonList(response.data.results)); // put to dispatch the action with response data
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

//worker
function* fetchPokemonDetailsSaga(action) {
  try {
    const response = yield call(() =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${action.payload}`)
    );
    yield put(setPokemonDetails(response.data));
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// take latest - when fetch_pokemon_list isdispatched it triggers the respective saga
// watcher
export function* fetchPokemon() {
  yield takeLatest("FETCH_POKEMON_LIST", fetchPokemonListSaga);
  yield takeLatest("FETCH_POKEMON_DETAILS", fetchPokemonDetailsSaga);
}
