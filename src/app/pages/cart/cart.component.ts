import { Component } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // Atributes
  cart: Cart = {
    items: [
      { id: 1, urlImage: 'https://placehold.co/150x200', name: 'snikers', price: 150, quantity: 3 }
    ]
  }
  dataSources: Array<CartItem> = [];
  displayedColumns: Array<string> = [ 'product', 'name', 'price', 'quantity', 'total', 'action' ];
}
