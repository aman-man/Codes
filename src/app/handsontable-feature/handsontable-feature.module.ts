import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandsontableFeatureRoutingModule } from './handsontable-feature-routing.module';
import { HandsontableFeatureComponent } from './handsontable-feature.component';


@NgModule({
  declarations: [
    HandsontableFeatureComponent
  ],
  imports: [
    CommonModule,
    HandsontableFeatureRoutingModule
  ]
})
export class HandsontableFeatureModule { }
