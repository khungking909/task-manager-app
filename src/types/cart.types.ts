export type CartItem = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color: string;
  size: string;
  stock: number;
};

export interface CartResponse {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}
