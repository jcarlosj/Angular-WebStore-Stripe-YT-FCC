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
      { id: 1, urlProduct: 'https://placehold.co/150x200', name: 'snikers', price: 150, quantity: 1 },
      { id: 2, urlProduct: 'https://placehold.co/150x200', name: 'puma', price: 175, quantity: 3 },
    ]
  }
  dataSource: Array<CartItem> = [];

  // Definicion de cada una de las columnas desplegadas en el <ngContainer>
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
];    // Si alguna de las columnas no esta aqui definida no se nuestra aunque este definida en el FrontEnd dentro de su <ng-container>

  ngOnInit() : void {
    this.dataSource = this.cart.items;
  }

  getTotal( items: Array<CartItem> ) : number {
    return items.map( item => item.price * item.quantity )
                .reduce( ( prev, curr ) => prev + curr, 0 );
  }

}
