import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: {},
  citiesList: [],
  citiesTable: [],
  inputValue: '',
  loading: false,
  error: null,
  search: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setField(state, { payload }) {
      const keys = Object.keys(payload);
      const values = Object.values(payload);
      for (let i = 0; i <= keys.length - 1; i += 1) {
        state[keys[i]] = values[i];
      }
    },
    citiesTableAdd(state, { payload }) {
      state.citiesTable.push(payload.cityObj);
    },
    citiesTableDel(state, { payload }) {
      state.citiesTable.splice(payload.nummRow, 1);
    },

  },
});

export const {
  setField, citiesTableAdd, citiesTableDel,
} = searchSlice.actions;

export default searchSlice.reducer;
