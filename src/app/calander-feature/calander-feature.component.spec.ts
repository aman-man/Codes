import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalanderFeatureComponent } from './calander-feature.component';

describe('CalanderFeatureComponent', () => {
  let component: CalanderFeatureComponent;
  let fixture: ComponentFixture<CalanderFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalanderFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalanderFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
