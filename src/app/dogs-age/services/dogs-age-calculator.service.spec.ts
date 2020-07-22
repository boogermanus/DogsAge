import { TestBed } from '@angular/core/testing';
import { DogsAgeCalculatorService } from './dogs-age-calculator.service';

describe('DogsAgeCalculatorService', () => {
  let service: DogsAgeCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [DogsAgeCalculatorService]});
    service = TestBed.inject(DogsAgeCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method calculate', () => {
    expect(() => service.calculate({
      calculationType: 'c',
      age: 0,
      size: 's'
    })).toBeTruthy();
  });
});
