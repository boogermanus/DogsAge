import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalculationConstants } from './models/calculation-constants';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  age = new FormControl(0, Validators.compose([
    Validators.required,
    Validators.min(0),
    Validators.max(16)
  ]));
  size = new FormControl(SizeConstants.SMALL);
  sizeHidden = true;
  subscriptions: Subscription = new Subscription();
  dogsAge = 0;

  get ageInvalid(): boolean {
    return !this.age.valid && this.age.touched;
  }

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

  public calculate() {
    this.dogsAge = this.dogsAgeCalculator.calculate({
      calculationType: this.calculationType.value,
      age: this.age.value,
      size: this.size.value
    });
  }
}
