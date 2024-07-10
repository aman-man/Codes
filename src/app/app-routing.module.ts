import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'grid-view', loadChildren: () => import('./grid-feature/grid-feature.module').then(m => m.GridFeatureModule) },
  { path: 'graph-view', loadChildren: () => import('./graph-feature/graph-feature.module').then(m => m.GraphFeatureModule) },
  { path: 'handsontable-view', loadChildren: () => import('./handsontable-feature/handsontable-feature.module').then(m => m.HandsontableFeatureModule) },
  { path: 'calander-view', loadChildren: () => import('./calander-feature/calander-feature.module').then(m => m.CalanderFeatureModule) },
  { path: 'upload-view', loadChildren: () => import('./file-upload-feature/file-upload-feature.module').then(m => m.FileUploadFeatureModule) },
  { path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
