import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A test Recipe', 'this is simply a test', 'https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/spanish-tortilla.jpg?itok=Uq5KFlWd'),
  new Recipe('A test Recipe', 'this is simply a test', 'https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/spanish-tortilla.jpg?itok=Uq5KFlWd')
];
  constructor() { }

  ngOnInit() {
  }

}
