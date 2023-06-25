import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT : { [id: number] : number } = {
  1: 370,   // 1: 400,
  3: 370,   // 3: 335,
  4: 370    // 4: 350
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  columnsToShow = 3;
  rowHeight = ROWS_HEIGHT[ this.columnsToShow ];
  showCategory: string | undefined;

  constructor( private cartService: CartService ) {}

  onColumnsToShow( numberCols: number ) : void {
    this.columnsToShow = numberCols;
    this.rowHeight = ROWS_HEIGHT[ this.columnsToShow ];
  }

  onShowCategory( newCategory: string ) : void {
    this.showCategory = newCategory;
  }

  onAddToCart( product: Product ) : void {
    // CartItem = Product [Entities/Model]
    this.cartService.addToCart({
      id: product.id,
      urlProduct: product.image,
      name: product.title,
      price: product.price,
      quantity: 1
    });
  }
}
