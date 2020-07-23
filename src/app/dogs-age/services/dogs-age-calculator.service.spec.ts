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
      calculationType: CalculationConstants.CLASSIC,
      age: 0,
      size: SizeConstants.SMALL
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method calculate', () => {
    expect(() => service.calculate(dog)).toBeTruthy();
  });

  it('should calculate classic dogs age 0', () => {
    expect(service.calculate(dog)).toBe(0);
  });

  it('should calculate classic dogs age 7', () => {
    dog.age = 1;
    expect(service.calculate(dog)).toBe(7);
  });

  it('should calculate new dogs age 0', () => {
    dog.calculationType = CalculationConstants.NEW;
    expect(service.calculate(dog)).toBe(0);
  });

  it('should calculate new dogs age 31', () => {
    dog.calculationType = CalculationConstants.NEW;
    dog.age = 1;
    expect(service.calculate(dog)).toBe(31);
  });
});
