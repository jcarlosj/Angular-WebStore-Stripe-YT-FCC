import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  columnsToShow = 3;

  onColumnsToShow( numberCols: number ) : void {
    this.columnsToShow = numberCols;
  }
}
