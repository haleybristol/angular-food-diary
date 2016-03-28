import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <h3>Edit Items:</h3>
    <div class="food-form">
      <input [(ngModel)]="food.name" class="col-sm-8 input-lg food-form"/>
      <input [(ngModel)]="food.calories" class="col-sm-8 input-lg food-form"/>
      <input [(ngModel)]="food.details" class="col-sm-8 input-lg food-form"/>
    </div>
  `
})

export class EditFoodComponent {
  public food: Food;
}
