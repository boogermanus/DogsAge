
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  imports: [
    MatSelectModule,
    MatCardModule,
  ],
  exports: [
    MatSelectModule,
    MatCardModule,
  ]
})
export class MaterialModule { }
