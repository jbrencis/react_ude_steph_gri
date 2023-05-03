import { configureStore } from "@reduxjs/toolkit";
import { songReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: moviesReducer,
  },
});

export { store, addSong, addMovie, removeMovie, removeSong, reset };
//
// const startingState = store.getState();
// console.log(JSON.stringify(startingState)); // {"songs":[]}
//
// store.dispatch(songsSlice.actions.addSong("Some song!"));
//
// const finalState = store.getState();
// console.log(JSON.stringify(finalState)); // {"songs":["Some song!"]}
