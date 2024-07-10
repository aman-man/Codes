import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadFeatureRoutingModule } from './file-upload-feature-routing.module';
import { FileUploadFeatureComponent } from './file-upload-feature.component';


@NgModule({
  declarations: [
    FileUploadFeatureComponent
  ],
  imports: [
    CommonModule,
    FileUploadFeatureRoutingModule
  ]
})
export class FileUploadFeatureModule { }
