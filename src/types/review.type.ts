import { User } from 'src/types/auth.types';

export interface ReviewResponse {
  id: number;
  productId: number;
  userId: number;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}
