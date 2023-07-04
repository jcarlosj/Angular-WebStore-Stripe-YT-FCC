import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {

  @Output() selectedCategory = new EventEmitter<string>();

  categories : Array<string> | undefined = [];
  categoriesSubscription: Subscription | undefined;

  constructor( private storeService: StoreService ) {}

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService
      .getAllCategories()
        .subscribe( _categories => {
          this.categories = _categories
        });
  }

  ngOnDestroy(): void {
    if( this.categoriesSubscription ) {
      this.categoriesSubscription.unsubscribe();
    }
  }

  onShowCategory( category: string ) {
    this.selectedCategory.emit( category );
  }
}
