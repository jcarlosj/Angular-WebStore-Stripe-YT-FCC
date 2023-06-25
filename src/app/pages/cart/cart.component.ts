import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // Data estatica a desplegar
  cart: Cart = {
    items: [
      { id: 1, urlProduct: 'https://placehold.co/150x200', name: 'snikers', price: 150, quantity: 1 },
      { id: 2, urlProduct: 'https://placehold.co/150x200', name: 'puma', price: 175, quantity: 3 },
    ]
  }

  // Datos que se van a desplegar en el FrontEnd
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

  constructor( private cartService: CartService ) {}

  ngOnInit() : void {
    this.dataSource = this.cart.items;    // Inicializa los datos a desplegar en la tabla en el FrontEnd
  }

  // Itera cada uno de los items de producto para calcular el valor total de los productos en el carrito usando el service
  getTotal( items: Array<CartItem> ) : number {
    return this.cartService.getTotal( items );
  }

}
