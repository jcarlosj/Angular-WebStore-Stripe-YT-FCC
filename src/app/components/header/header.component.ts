import { Component, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild( MatMenuTrigger ) trigger!: MatMenuTrigger;

  private _cart: Cart = { items: [] };
  itemsQuantity: number = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }
  set cart( cart: Cart ) {
    this._cart = cart;

    // Obtenemos una lista con todas las cantidades de los productos
    this.itemsQuantity = cart.items
                            .map( item => item.quantity )
                            .reduce( ( prev, curr ) => prev + curr, 0 );
  }

  constructor( private cartService: CartService ) {}

  // Itera cada uno de los items de producto para calcular el valor total de los productos en el carrito usando el service
  getTotal( items: Array<CartItem> ) : number {
    return this.cartService.getTotal( items );
  }

  onClearCart() : void {
    this.cartService.clearCart();
  }

  someMethod() {
    this.trigger.openMenu();
  }
}
