import { Component } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  order = 'desc';
  itemsShowed = 12;

  onSortUpdated ( newOrder: string ) : void {
    this.order = newOrder;
  }

  onItemsUpdated ( numberItems: number ) {
    this.itemsShowed = numberItems;
  }

}
