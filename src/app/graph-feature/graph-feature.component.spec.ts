import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphFeatureComponent } from './graph-feature.component';

describe('GraphFeatureComponent', () => {
  let component: GraphFeatureComponent;
  let fixture: ComponentFixture<GraphFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
