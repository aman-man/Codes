import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadFeatureComponent } from './file-upload-feature.component';

const routes: Routes = [{ path: '', component: FileUploadFeatureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadFeatureRoutingModule { }
