import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div class="container details">
      <h1 class="selectedFood">Selected Food</h1>
      <h3>{{food.name}} - "{{food.details}}"</h3>
      <h4>Calories: {{food.calories}}</h4>
    </div>
    <h3>Edit Items:</h3>
    <div class= "container food-form">
      <input [(ngModel)]="food.name" class="col-sm-8 input-lg food-form"/>
      <input [(ngModel)]="food.calories" class="col-sm-8 input-lg food-form"/>
      <input [(ngModel)]="food.details" class="col-sm-8 input-lg food-form"/>
    </div>
  `
})

export class EditFoodComponent {
  public food: Food;
}
