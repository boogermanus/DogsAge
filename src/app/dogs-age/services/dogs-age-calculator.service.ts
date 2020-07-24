import { Injectable } from '@angular/core';
import { IDogsAge } from '../models/idogs-age';
import { CalculationConstants } from '../models/calculation-constants';
import { SizeConstants } from '../models/size-constants';

@Injectable({
  providedIn: 'root'
})
export class DogsAgeCalculatorService {

  private readonly CLASSIC_AGE = 7;
  private readonly EXOTIC_AGE = 15;
  private readonly SMALL = 24;

  constructor() { }

  public calculate(options: IDogsAge): number {
    let result = 0;
    switch (options.calculationType) {
      case CalculationConstants.CLASSIC:
        result = this.calculateClassic(options.age);
        break;
      case CalculationConstants.NEW:
        result = this.calculateNew(options.age);
        break;
      case CalculationConstants.EXOTIC:
        result = this.calculateExotic(options);
        break;
      default:
        return 0;
    }

    return Math.round(result);
  }

  private calculateClassic(age: number): number {
    return age * this.CLASSIC_AGE;
  }

  private calculateNew(age: number): number {
    if (age <= 0) {
      return 0;
    }

    return 16 * Math.log(age) + 31;
  }

  private calculateExotic(options: IDogsAge): number {
    if (options.age <= 0) {
      return 0;
    }

    if (options.age === 1) {
      return this.EXOTIC_AGE;
    }

    switch (options.size) {
      case SizeConstants.SMALL:
        return this.calculateExoticSmall(options.age);
      case SizeConstants.MEDIUM:
        return this.calculateExoticMedium(options.age);
    }
  }

  private calculateExoticSmall(age: number): number {
    switch (age) {
      case 2:
        return 24;
      case 3:
        return 28;
      case 4:
        return 32;
      case 5:
        return 36;
      case 6:
        return 40;
      default:
        return (age - 5) * 4 + 36;
    }
  }

  private calculateExoticMedium(age: number): number {
    switch (true) {
      case (age < 6):
        return this.calculateExoticSmall(age);
      case (age === 6):
        return 42;
      case (age === 7):
        return 47;
      case (age > 7):
        if (age % 2 === 0) {
          return  (age - 6) / 2 * 9 + 42;
        }
        else {
          return (age - 7) / 2 * 9 + 47;
        }
    }
  }
}
