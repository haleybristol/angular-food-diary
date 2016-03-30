import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component';
import { EditFoodComponent } from './edit-food.component';
import { HealthyPipe } from './healthy.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [HealthyPipe],
  directives: [FoodComponent, NewFoodComponent, EditFoodComponent],
  template: `
  <div class="drop">
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Filter Foods</option>
      <option value="low">Show Healthy Option</option>
      <option value="high">Show Unhealthy Option</option>
    </select>
  </div>
  <br>
  <div class="container-edit">
    <food-display *ngFor="#currentFood of foodList | healthy:filterHealthy"
      (click) = "foodClicked(currentFood)"
      [class.selected]="currentFood === selectedFood"
      [food]="currentFood">
    </food-display>
  </div>
  <div class="container food-edit">
    <edit-food-details *ngIf="selectedFood" [food]="selectedFood">
    </edit-food-details>
  </div>
  <br>
  <br>
  <div>
    <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  </div>
  `

})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterHealthy: string = "all";

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
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
}
