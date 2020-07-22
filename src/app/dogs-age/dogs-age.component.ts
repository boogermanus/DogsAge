import { Component, OnInit } from '@angular/core';
import { CalculationConstants } from './models/calculation-constants';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { SizeConstants } from './models/size-constants';
import { DogsAgeCalculatorService } from './services/dogs-age-calculator.service';

@Component({
  selector: 'app-dogs-age',
  templateUrl: './dogs-age.component.html',
  styleUrls: ['./dogs-age.component.css']
})
export class DogsAgeComponent implements OnInit {

  calculationTypes: any[] = CalculationConstants.calculationTypes;
  sizes: any[] = SizeConstants.sizes;
  calculationType = new FormControl(CalculationConstants.DEFAULT_VALUE);
  age = new FormControl(0);
  size = new FormControl('');
  sizeHidden = true;

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private dogsAgeCalculator: DogsAgeCalculatorService) { }

  ngOnInit(): void {
    this.form = this.buildForm();
    this.calculationType.valueChanges.subscribe((change: string) => this.handleCalculationChange(change));
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      calculationType: this.calculationType,
      age: this.age,
      size: this.size,
    });
  }

  private handleCalculationChange(change: string) {
    if (change === CalculationConstants.EXOTIC) {
      this.sizeHidden = false;
    }
    else {
      this.sizeHidden = true;
    }
  }

}
