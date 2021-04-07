import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { OverviewPageComponent } from './overview-page.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
],
  declarations: [
    OverviewPageComponent
  ],
  providers: [
  ]
})
export class OverviewPageModule{ }
