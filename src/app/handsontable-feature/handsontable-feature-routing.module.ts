import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandsontableFeatureComponent } from './handsontable-feature.component';

const routes: Routes = [{ path: '', component: HandsontableFeatureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandsontableFeatureRoutingModule { }
