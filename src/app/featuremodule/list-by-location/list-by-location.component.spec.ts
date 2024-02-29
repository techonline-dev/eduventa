import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByLocation } from './list-by-location.component';

describe('ListByLocation', () => {
  let component: ListByLocation;
  let fixture: ComponentFixture<ListByLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListByLocation ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListByLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
