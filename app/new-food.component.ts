import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `

    <div class="new-food-form">
      <input placeholder="Food Name" class="col-sm-8 input-lg food-form" #newName/>
      <input placeholder="Calories" class="col-sm-8 input-lg food-form" #newCalories />
      <input placeholder="Details" class="col-sm-8 input-lg food-form" #newDetails/>
    </div>
    <br>
    <br>
      <button class="add-food" (click)="addFood(newName, newCalories, newDetails)">Add</button>

  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<any>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userCalories: HTMLInputElement, userDetails: HTMLInputElement){
    var log = [userName.value, userCalories.value, userDetails.value]
    this.onSubmitNewFood.emit(log);
    userName.value = "";
    userCalories.value = "";
    userDetails.value = "";
  }
}
