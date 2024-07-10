import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalanderFeatureRoutingModule } from './calander-feature-routing.module';
import { CalanderFeatureComponent } from './calander-feature.component';


@NgModule({
  declarations: [
    CalanderFeatureComponent
  ],
  imports: [
    CommonModule,
    CalanderFeatureRoutingModule
  ]
})
export class CalanderFeatureModule { }
