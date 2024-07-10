import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalanderFeatureComponent } from './calander-feature.component';

const routes: Routes = [{ path: '', component: CalanderFeatureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalanderFeatureRoutingModule { }
