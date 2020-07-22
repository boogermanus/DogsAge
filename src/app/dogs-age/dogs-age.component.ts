import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalculationConstants } from './models/calculation-constants';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { SizeConstants } from './models/size-constants';
import { DogsAgeCalculatorService } from './services/dogs-age-calculator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dogs-age',
  templateUrl: './dogs-age.component.html',
  styleUrls: ['./dogs-age.component.css']
})
export class DogsAgeComponent implements OnInit, OnDestroy {

  calculationTypes: any[] = CalculationConstants.calculationTypes;
  sizes: any[] = SizeConstants.sizes;
  calculationType = new FormControl(CalculationConstants.CLASSIC);
  age = new FormControl(0);
  size = new FormControl('');
  sizeHidden = true;
  subscriptions: Subscription = new Subscription();

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private dogsAgeCalculator: DogsAgeCalculatorService) { }

  ngOnInit(): void {
    this.form = this.buildForm();
    const sub1 = this.calculationType
      .valueChanges
      .subscribe((change: string) => this.handleCalculationChange(change));
    this.subscriptions.add(sub1);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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
