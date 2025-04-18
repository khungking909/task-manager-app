export interface AuthResponse {
  token: string;
}

export interface AuthRequest {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  email: string;
  role: string;
}

export interface GetUserResponse {
  user: User;
  message: string;
}
