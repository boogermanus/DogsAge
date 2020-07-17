import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsAgeComponent } from './dogs-age/dogs-age.component';


const routes: Routes = [
  { path: '**', component: DogsAgeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
