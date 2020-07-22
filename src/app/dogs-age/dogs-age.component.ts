import { Component, OnInit } from '@angular/core';
import { CalculationConstants } from './models/calculation-constants';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dogs-age',
  templateUrl: './dogs-age.component.html',
  styleUrls: ['./dogs-age.component.css']
})
export class DogsAgeComponent implements OnInit {

  calculationTypes: any[] = CalculationConstants.calculationTypes;
  calculationType = new FormControl(CalculationConstants.DEFAULT_VALUE);
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      calculationType: this.calculationType
    });
  }

}
