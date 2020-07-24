import { TestBed } from '@angular/core/testing';
import { DogsAgeCalculatorService } from './dogs-age-calculator.service';
import { IDogsAge } from '../models/idogs-age';
import { CalculationConstants } from '../models/calculation-constants';
import { SizeConstants } from '../models/size-constants';
import { expressionType } from '@angular/compiler/src/output/output_ast';

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

  it('should calculate new dogs age 42', () => {
    dog.calculationType = CalculationConstants.NEW;
    dog.age = 2;
    expect(service.calculate(dog)).toBe(42);
  });

  it('should calculate new dogs age 0 for negative age', () => {
    dog.calculationType = CalculationConstants.NEW;
    dog.age = -1;
    expect(service.calculate(dog)).toBe(0);
  });

  it('should calculate exotic dogs age 0', () => {
    dog.calculationType = CalculationConstants.EXOTIC;
    expect(service.calculate(dog)).toBe(0);
  });

  it('should calculate exotic dog age 0 for negative age', () => {
    dog.calculationType = CalculationConstants.EXOTIC;
    dog.age = -1;
    expect(service.calculate(dog)).toBe(0);
  });
  it('should calculate exotic dog age 15', () => {
    dog.calculationType = CalculationConstants.EXOTIC;
    dog.age = 1;
    expect(service.calculate(dog)).toBe(15);
  });
  it('should calculate exotic small dogs age 44', () => {
    dog.calculationType = CalculationConstants.EXOTIC;
    dog.size = SizeConstants.SMALL;
    dog.age = 7;
    expect(service.calculate(dog)).toBe(44);
  });
  it('should calculate exotic medium dogs age 47', () => {
    dog.calculationType = CalculationConstants.EXOTIC;
    dog.size = SizeConstants.MEDIUM;
    dog.age = 7;
    expect(service.calculate(dog)).toBe(47);
  });
  it('should calculate exotic medium dogs age 51', () => {
    dog.calculationType = CalculationConstants.EXOTIC;
    dog.size = SizeConstants.MEDIUM;
    dog.age = 8;
    expect(service.calculate(dog)).toBe(51);
  });
  it('should calculate exotic medium dogs age 56', () => {
    dog.calculationType = CalculationConstants.EXOTIC;
    dog.size = SizeConstants.MEDIUM;
    dog.age = 9;
    expect(service.calculate(dog)).toBe(56);
  });
  it('should calculate exotic large dogs age 55', () => {
    dog.calculationType = CalculationConstants.EXOTIC;
    dog.size = SizeConstants.LARGE;
    dog.age = 8;
    expect(service.calculate(dog)).toBe(55);
  });
});
