import { Component } from '@angular/core';

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

  onColumnsToShow( numberCols: number ) : void {
    this.columnsToShow = numberCols;
    this.rowHeight = ROWS_HEIGHT[ this.columnsToShow ];
  }

  onShowCategory( newCategory: string ) : void {
    this.showCategory = newCategory;
  }
}
