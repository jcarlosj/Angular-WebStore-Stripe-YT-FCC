export interface Cart {
  items: Array<CartItem>;
}

export interface CartItem {
  id: number;
  urlImage: string;
  name: string;
  price: number;
  quantity: number;
}
