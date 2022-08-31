import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
  name: "position",
  initialState: {
    long: 0,
    lat: 0,
    height: 100,
    elevation: 0,
  },

  reducers: {
    setPosition: (state, action) => {
      state.long = action.payload.long;
      state.lat = action.payload.lat;
    },

    updatePosition: (state, action) => {
      state.long = action.payload.long;
      state.lat = action.payload.lat;
      state.height = action.payload.height;
      state.elevation = action.payload.elevation;
    },
  },
});
