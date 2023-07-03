import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;

  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();     // Creamos un evento llamado 'addToCard' al componente padre

  onAddToCart() : void {
    this.addToCart.emit( this.product );        // Agregamos los datos que vamos a emitir
  }
}
