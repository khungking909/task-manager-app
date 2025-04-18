import { RootState } from 'src/app/store/store';

const getUserSelector = (state: RootState) => state.auth.user;

export { getUserSelector };
