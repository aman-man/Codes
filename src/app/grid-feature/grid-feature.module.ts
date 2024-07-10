import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridFeatureRoutingModule } from './grid-feature-routing.module';
import { GridFeatureComponent } from './grid-feature.component';


@NgModule({
  declarations: [
    GridFeatureComponent
  ],
  imports: [
    CommonModule,
    GridFeatureRoutingModule
  ]
})
export class GridFeatureModule { }
