import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departamentos: [],
  
};

export const departamentosSlice = createSlice({
  name: 'departamentos',
  initialState,
  reducers: {
    // Actions
    setDepartamentos: (state, action) => {
      const { payload } = action;
      state.departamentos = payload;
   
    },

  },
});

export const { setDepartamentos } = departamentosSlice.actions;
export default departamentosSlice.reducer;