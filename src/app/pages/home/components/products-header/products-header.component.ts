import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  @Output() columnsToShow = new EventEmitter<number>();

  order = 'desc';
  itemsShowed = 12;

  onSortUpdated ( newOrder: string ) : void {
    this.order = newOrder;
  }

  onItemsUpdated ( numberItems: number ) : void {
    this.itemsShowed = numberItems;
  }

  onColumnsUpdated ( numberColumns: number ) : void {
    this.columnsToShow.emit( numberColumns );
  }

}
