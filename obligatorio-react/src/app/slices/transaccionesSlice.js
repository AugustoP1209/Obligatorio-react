import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transacciones: [],
  transFiltradas: [],
  
};

export const transaccionesSlice = createSlice({
  name: 'transacciones',
  initialState,
  reducers: {
    // Actions
    setTransacciones: (state, action) => {
      const { payload } = action;
      state.transacciones = payload;
   
    },
    addNewTrans: (state, action) => {
      const { payload } = action;
      state.transacciones = [...state.transacciones, payload];
      state.transFiltradas = [...state.transFiltradas, payload];
    },

  },
});

export const { setTransacciones,addNewTrans } = transaccionesSlice.actions;
export default transaccionesSlice.reducer;