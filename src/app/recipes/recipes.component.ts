import { Recipe } from './recipe.model';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Input()@Output() selectedRecipe:Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  setRecipeDetail(recipe:Recipe){
    this.selectedRecipe = recipe;
    console.log('emmmimt');
    console.log(this.selectedRecipe);
  }

}
