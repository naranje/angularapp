import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CluesComponent } from './clues.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';

describe('CluesComponent', () => {
  let component: CluesComponent;
  let fixture: ComponentFixture<CluesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CluesComponent ],
      providers: [
        FormBuilder
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
