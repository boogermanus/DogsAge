import { Injectable } from '@angular/core';
import { DogsAgeModule } from '../dogs-age.module';
import { IDogsAge } from '../models/idogs-age';
import { CalculationConstants } from '../models/calculation-constants';

@Injectable({
  providedIn: 'root'
})
export class DogsAgeCalculatorService {

  private readonly CLASSIC_AGE = 7;

  constructor() { }

  public calculate(options: IDogsAge): number {
    switch (options.calculationType) {
      case CalculationConstants.CLASSIC:
        return this.calculateClassic(options.age);
      default:
        return 0;
    }
  }

  private calculateClassic(age: number): number {
    return age * this.CLASSIC_AGE;
  }
}
