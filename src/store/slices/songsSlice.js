import { createSlice } from "@reduxjs/toolkit";

import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  // to watch actions from another slice of state (movieSlice)
  // and when app/reset is dispatched => return [] of songs(the same as reset)
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
    // builder.addCase(moviesSlice.actions.reset, (state, action) => {
    //the same as above
    // builder.addCase("movie/reset", (state, action) => {
    // return [];
    // });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songReducer = songsSlice.reducer;

// ======= Action creator=================
//   addSong(payload) {
//     return {
//       type: 'songs/addSong',
//       payload: payload
//     };
// }
