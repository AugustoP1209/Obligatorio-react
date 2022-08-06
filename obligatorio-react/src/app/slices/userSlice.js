import { createSlice } from '@reduxjs/toolkit';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from '../../utils/storage';

const USER_STORAGE_KEY = 'todoAppUser';

const initialState = {
  user: getFromLocalStorage(USER_STORAGE_KEY),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Actions
    setLoginUser: (state, action) => {
      const { payload } = action;
      state.user = payload;
      setToLocalStorage(USER_STORAGE_KEY, payload);
    },
    setLogoutUser: (state) => {
      state.user = null;
      removeFromLocalStorage(USER_STORAGE_KEY);
    },
  },
});

export const { setLoginUser, setLogoutUser } = userSlice.actions;
export default userSlice.reducer;


