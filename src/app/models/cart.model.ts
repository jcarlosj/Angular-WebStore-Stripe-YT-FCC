export interface Cart {
  items: Array<CartItem>;
}

export interface CartItem {
  id: number;
  urlProduct: string;
  name: string;
  price: number;
  quantity: number;
}
