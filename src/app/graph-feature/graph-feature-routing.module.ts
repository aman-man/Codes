import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphFeatureComponent } from './graph-feature.component';

const routes: Routes = [{ path: '', component: GraphFeatureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphFeatureRoutingModule { }
