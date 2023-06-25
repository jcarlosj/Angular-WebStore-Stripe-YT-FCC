import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;

  product: Product | undefined = {
    id: 1,
    title: 'snikers',
    price: 150,
    category: 'shoes',
    description: 'Description of product',
    image: 'https://placehold.co/150x200'
  };

  @Output() addToCart = new EventEmitter();     // Creamos un evento llamado 'addToCard' al componente padre

  onAddToCart() : void {
    this.addToCart.emit( this.product );        // Agregamos los datos que vamos a emitir
  }
}
