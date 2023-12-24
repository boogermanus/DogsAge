
import { NgModule } from '@angular/core';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
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
