import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ciudades: [],
  
};

export const ciudadesSlice = createSlice({
  name: 'ciudades',
  initialState,
  reducers: {
    // Actions
    setCiudades: (state, action) => {
      const { payload } = action;
      state.ciudades = payload;
    },

  },
});

export const { setCiudades } = ciudadesSlice.actions;
export default ciudadesSlice.reducer;