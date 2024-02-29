import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollagePredicatorDetails } from './college-predictor-details.component';

describe('AboutComponent', () => {
  let component: CollagePredicatorDetails;
  let fixture: ComponentFixture<CollagePredicatorDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollagePredicatorDetails ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollagePredicatorDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
