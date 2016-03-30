import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component';
import { FoodListComponent } from './food-list.component';


@Component ({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="jumbotron">
    <h1>Food Diary</h1>
    </div>
    <div class="container">
    <h1>Foods Consumed Today:</h1>
      <food-list
      [foodList]="foods">
      </food-list>
    </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Cocoa Puffs", 250, "Breakfast"),
      new Food("Apple", 90, "Snack"),
      new Food("Kale Salad", 400, "Lunch"),
      new Food("Spaghetti and meatballs", 600, "Dinner"),
    ];
  }
  // foodWasSelected(clickedFood: Food): void {
  //   console.log(Food);
  // }
}
