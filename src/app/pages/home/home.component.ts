import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from 'src/app/models/product.model';

import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

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
export class HomeComponent implements OnInit, OnDestroy {
  columnsToShow = 3;
  rowHeight = ROWS_HEIGHT[ this.columnsToShow ];
  showCategory: string | undefined;

  products: Array<Product> | undefined;
  sort: string = 'desc';
  count: string = '12';
  productsSubscription: Subscription | undefined;


  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    // Si existe una subcripcion la eliminamos para evitar fugas de memoria al realizar varias subscripciones tras la multiple recarga del componente
    if( this.productsSubscription ) {
      this.productsSubscription.unsubscribe();
    }
  }

  getProducts() {
    // Creamos una subscripcion al Observable devuelto por el Service. Obtenermos los datos de dicho servicio.
    this.productsSubscription = this.storeService
      .getAllProducts( this.count, this.sort )
        .subscribe( _products => {
          this.products = _products;
        });
  }

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

  onOrderChange( newOrder: string ) : void {
    this.sort = newOrder;
    this.getProducts();
  }

  onItemsShowedChange( newCount: Number ) : void {
    this.count = newCount.toString();
    this.getProducts();
  }
}
