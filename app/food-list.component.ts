import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component';
import { EditFoodComponent } from './edit-food.component';


@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, NewFoodComponent, EditFoodComponent],
  template: `
  <div class="container-edit">
    <food-display *ngFor="#currentFood of foodList"
      (click) = "foodClicked(currentFood)"
      [class.selected]="currentFood === selectedFood"
      [food]="currentFood">
    </food-display>
  </div>
  <div class="container food-edit">
    <edit-food *ngIf="selectedFood" [food]="selectedFood">
    </edit-food>
  </div>
  <div>
    <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  </div>
  `

})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;

  constructor(){
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(item: any): void {
    this.foodList.push(new Food(item[0], item[1], item[2])
    );
  }
}
