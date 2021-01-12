import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
     'https://images.immediate.co.uk/production/volatile/sites/2/2016/02/20501.jpg?webp=true&quality=90&crop=1px%2C328px%2C597px%2C257px&resize=597%2C253')
    ,
    new Recipe(
    'Angular Newbie',
    'Oscar',
    'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/8138/successful-business-man-clipart-md.png')
   ];

   @Output() onRecipeClick = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(recipe:Recipe){
    console.log( recipe.name);
    this.onRecipeClick.emit(recipe);
  }

}
