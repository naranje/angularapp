import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CluesComponent } from './clues.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { DataService } from '../core/services/data.service';

describe('CluesComponent', () => {
  let component: CluesComponent;
  let fixture: ComponentFixture<CluesComponent>;
  let dataServiceSpy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CluesComponent ],
      providers: [
        FormBuilder,
        {provide: DataService, useValue: dataServiceSpy}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    dataServiceSpy = jasmine.createSpyObj('DataService', ['getClues']);
    dataServiceSpy.getClues.and.returnValue(of([]));
    fixture = TestBed.createComponent(CluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
