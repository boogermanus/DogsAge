import { Injectable } from '@angular/core';
import { DogsAgeModule } from '../dogs-age.module';
import { IDogsAge } from '../models/idogs-age';

@Injectable({
  providedIn: DogsAgeModule
})
export class DogsAgeCalculatorService {

  constructor() { }

  public calculate(options: IDogsAge): number {
    return 0;
  }
}
