import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CluesGridComponent } from './clues-grid.component';

describe('CluesGridComponent', () => {
  let component: CluesGridComponent;
  let fixture: ComponentFixture<CluesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CluesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CluesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
