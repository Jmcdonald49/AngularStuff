import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CommonModule } from '@angular/common';

import { AssessmentsComponent } from './assessments/assessments.component';

const routes: Routes = [
  { path: 'assessment', component: AssessmentsComponent },
  { path: '', redirectTo: '/assessments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
