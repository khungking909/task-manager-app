import { User } from 'src/types/auth.types';

export interface AuthType {
  token: string | null;
  user: User;
}
