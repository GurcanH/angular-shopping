import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test.',
      'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/10brisket.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
