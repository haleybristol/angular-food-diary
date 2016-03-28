import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <p>{{ food.name }}</p>
  `
})

export class FoodComponent {
  public food: Food;
}
