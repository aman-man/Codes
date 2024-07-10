import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridFeatureComponent } from './grid-feature.component';

const routes: Routes = [{ path: '', component: GridFeatureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridFeatureRoutingModule { }
