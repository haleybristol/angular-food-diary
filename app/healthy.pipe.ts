import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe ({
  name: "healthy",
  pure: false
})

export class HealthyPipe implements PipeTransform {
  transform(input: Food[], args) {
    var wantedHealth = args[0];
    if(wantedHealth === "low") {
      return input.filter((food) => {
        if(food.calories < 300){
          return !food.healthy;
        }
      });
    } else if (wantedHealth === "high") {
      return input.filter((food) => {
        if(food.calories > 300) {
          return !food.healthy;
        }
      });
    } else {
      return input;
    }
  }
}
