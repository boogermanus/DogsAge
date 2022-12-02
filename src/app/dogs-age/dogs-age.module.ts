import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsAgeComponent } from './dogs-age.component';
import { MaterialModule } from '../material-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DogsAgeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class DogsAgeModule { }
