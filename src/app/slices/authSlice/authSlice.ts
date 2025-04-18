import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthType } from 'src/app/slices/authSlice/authType.types';

const initialState: AuthType = {
  token: '',
  user: {
    id: '',
    username: '',
    email: '',
    avatar: '',
    role: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    removeUser(state) {
      return { ...state, user: initialState.user };
    },
    setUser(state, action: PayloadAction<AuthType['user']>) {
      return { ...state, user: action.payload };
    },
  },
});

export const { removeUser, setUser } = authSlice.actions;
export default authSlice.reducer;
