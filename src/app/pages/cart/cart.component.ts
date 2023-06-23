import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // Atributes
  cart: Cart = {
    items: [
      { id: 1, urlProduct: 'https://placehold.co/150x200', name: 'snikers', price: 150, quantity: 3 }
    ]
  }
  dataSource: Array<CartItem> = [];

  // Definicion de cada una de las columnas desplegadas en el <ngContainer>
  displayedColumns: Array<string> = [ 'product', 'name', 'price', 'quantity' ];    // Si alguna de las columnas no esta aqui definida no se nuestra aunque este definida en el FrontEnd dentro de su <ng-container>

  ngOnInit() : void {
    this.dataSource = this.cart.items;
  }

}
