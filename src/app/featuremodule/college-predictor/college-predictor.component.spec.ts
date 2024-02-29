import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollagePredicator } from './college-predictor.component';

describe('AboutComponent', () => {
  let component: CollagePredicator;
  let fixture: ComponentFixture<CollagePredicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollagePredicator ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollagePredicator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
