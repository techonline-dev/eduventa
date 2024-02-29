import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollageListComponent } from './collage-list.component';

describe('CollageListComponent', () => {
  let component: CollageListComponent;
  let fixture: ComponentFixture<CollageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
