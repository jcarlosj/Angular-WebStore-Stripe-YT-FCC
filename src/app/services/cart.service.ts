import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // RxJS:  Almacena el último valor emitido a sus consumidores, y cada vez que se suscribe un nuevo Observador, recibirá inmediatamente el "valor actual"
  cart = new BehaviorSubject<Cart>({
    items: []
  });

  constructor( private _snackbar: MatSnackBar ) { }

  addToCart( newItem: CartItem ) : void {
    const items = [ ...this.cart.value.items ];   // Obtenemos el valor agregado a tra

    const itemInCart = items.find( item => item.id === newItem.id );

    if( itemInCart ) {
      itemInCart.quantity += 1;
    }
    else {
      items.push( newItem );
    }

    this.cart.next({ items });    // Emite los cambios para que cada componente subscrito pueda tener los cambios

    this._snackbar.open( '1 item added to cart', 'Ok', {
      duration: 3000
    });

    console.log( this.cart.value );

  }

  // Itera cada uno de los items de producto para calcular el valor total de los productos en el carrito
  getTotal( items: Array<CartItem> ) : number {
    return items.map( item => item.price * item.quantity )
                .reduce( ( prev, curr ) => prev + curr, 0 );
  }

  clearCart() : void {
    this.cart.next({
      items: []
    });

    this._snackbar.open( 'Cart is cleared', 'Ok', {
      duration: 3000
    });
  }


}
