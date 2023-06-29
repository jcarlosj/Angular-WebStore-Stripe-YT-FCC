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
    const items = [ ...this.cart.value.items ];   // Obtenemos el valor agregado a traves del gestor de estado del componente

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

  removeQuantity( item: CartItem ) : void {
    let itemForRemoval : CartItem | undefined;

    let filteredItems : Array<CartItem> = this.cart.value.items.map( ( _item: CartItem ) => {

      // Verificamos que el id del producto a eliminar coincida con algun item dentro de la lista del carrito de compras
      if( _item.id === item.id ) {
        _item.quantity--;             // Resta la cantidad de un producto dentro de la lista del carrito de compras

        // Verificamos si la cantidad es cero para eliminar el producto dentro de la lista del carrito de compras
        if( _item.quantity === 0 ) {
          itemForRemoval = _item;     // Elimina el producto si su cantidad llega a CERO
        }

      }

      return _item;
    });

    // Verifica si hay un producto para eliminar
    if( itemForRemoval ) {
      filteredItems = this.removeFromCart( itemForRemoval, false );
    }

    this.cart.next({ items: filteredItems });   // Actualiza el estado

    this._snackbar.open( '1 item removed from cart', 'Ok', {
      duration: 3000
    });

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

  // Itera cada uno de los items de producto dentro del estado del componente y elimina el item solicitado
  removeFromCart( item: CartItem, update = true ) : Array<CartItem> {

    const filteredItems = this.cart.value.items.filter( ( _item: CartItem ) => {
      return _item.id !== item.id;      // Filtramos todos los items que no tengan el id igual
    });

    if( update ) {
      this.cart.next({ items: filteredItems });   // Actualiza el estado

      this._snackbar.open( '1 item removed from cart', 'Ok', {
        duration: 3000
      });
    }

    return filteredItems;
  }

}
