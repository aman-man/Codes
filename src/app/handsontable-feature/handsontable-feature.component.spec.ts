import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandsontableFeatureComponent } from './handsontable-feature.component';

describe('HandsontableFeatureComponent', () => {
  let component: HandsontableFeatureComponent;
  let fixture: ComponentFixture<HandsontableFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandsontableFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandsontableFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
