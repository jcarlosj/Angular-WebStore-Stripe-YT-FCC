import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  columnsToShow = 3;
  showCategory: string | undefined;

  onColumnsToShow( numberCols: number ) : void {
    this.columnsToShow = numberCols;
  }

  onShowCategory( newCategory: string ) : void {
    this.showCategory = newCategory;
  }
}
