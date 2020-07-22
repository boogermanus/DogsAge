import { TestBed } from '@angular/core/testing';
import { DogsAgeCalculatorService } from './dogs-age-calculator.service';
import { IDogsAge } from '../models/idogs-age';
import { CalculationConstants } from '../models/calculation-constants';
import { SizeConstants } from '../models/size-constants';

describe('DogsAgeCalculatorService', () => {
  let service: DogsAgeCalculatorService;
  let dog: IDogsAge;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [DogsAgeCalculatorService]});
    service = TestBed.inject(DogsAgeCalculatorService);
    dog = {
      calculationType: CalculationConstants.DEFAULT_VALUE,
      age: 0,
      size: SizeConstants.SMALL
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method calculate', () => {
    expect(() => service.calculate(dog)).toBeTruthy();
  });

  it('should return 0 for classic', () => {
    expect(() => service.calculate(dog)).toBe(0);
  });
});
