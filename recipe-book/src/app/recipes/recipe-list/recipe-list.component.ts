import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://thumbs2.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://thumbs2.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg',[])
  ];

  constructor() { }

  ngOnInit() {
    console.info("test");
  }

  onSelected(recipe: Recipe) {
    console.info(recipe);
    this.recipeSelected.emit(recipe);
  }
}
