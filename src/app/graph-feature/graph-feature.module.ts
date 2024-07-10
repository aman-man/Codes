import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphFeatureRoutingModule } from './graph-feature-routing.module';
import { GraphFeatureComponent } from './graph-feature.component';


@NgModule({
  declarations: [
    GraphFeatureComponent
  ],
  imports: [
    CommonModule,
    GraphFeatureRoutingModule
  ]
})
export class GraphFeatureModule { }
