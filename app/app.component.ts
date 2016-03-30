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
      [foodList]="foods"
      (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Cocoa Puffs", "Breakfast", "250"),
      new Food("Apple", "Snack", "90"),
      new Food("Kale Salad", "Lunch", "400"),
      new Food("Spaghetti and meatballs", "Dinner", "600"),
    ];
  }
  foodWasSelected(clickedFood: Food): void {
  }
}
