import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadFeatureComponent } from './file-upload-feature.component';

describe('FileUploadFeatureComponent', () => {
  let component: FileUploadFeatureComponent;
  let fixture: ComponentFixture<FileUploadFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
