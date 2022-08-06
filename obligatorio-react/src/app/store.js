import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import departamentosReducer from './slices/departamentosSlice'
import transaccionesReducer from './slices/transaccionesSlice'
import ciudadesReducer from './slices/ciudadesSlice'
import monedasReducer from './slices/monedasSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    departamentos: departamentosReducer,
    transacciones: transaccionesReducer,
    ciudades: ciudadesReducer,
    monedas: monedasReducer,
  },
});

export default store;
