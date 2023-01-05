import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  name: ''
};
  
  const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
      setFilter(state, action) {
        return {...state, name: action.payload};
      },
    },
  });
  
  export const { setFilter } = filtersSlice.actions;
  export const filtersReducer = filtersSlice.reducer;