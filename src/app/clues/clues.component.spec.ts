import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CluesComponent } from './clues.component';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { DataService } from '../core/services/data.service';
import { IClue } from '../shared/interfaces/iclue';
import { By } from '@angular/platform-browser';

describe('CluesComponent', () => {
  let component: CluesComponent;
  let fixture: ComponentFixture<CluesComponent>;
  
  const expectedClues: IClue[] = [
    {
      id: 115687,
      answer: "raise",
      question: "An increase in wages",
      value: 200,
      airdate: new Date("2013-07-11T12:00:00.000Z"),
      created_at: new Date("2014-02-14T02:45:17.935Z"),
      updated_at: new Date("2014-02-14T02:45:17.935Z"),
      category_id: 15784,
      game_id: null,
      invalid_count: null,
      category: {
        id: 15784,
        title: "poker words",
        created_at: new Date("2014-02-14T02:45:17.772Z"),
        updated_at: new Date("2014-02-14T02:45:17.772Z"),
        clues_count: 10
      }
    },
    {
      id: 115699,
      answer: "flush",
      question: "A rosy glow of the face",
      value: 600,
      airdate: new Date("2013-07-11T12:00:00.000Z"),
      created_at: new Date("2014-02-14T02:45:17.935Z"),
      updated_at: new Date("2014-02-14T02:45:17.935Z"),
      category_id: 15784,
      game_id: null,
      invalid_count: null,
      category: {
        id: 15784,
        title: "poker words",
        created_at: new Date("2014-02-14T02:45:17.772Z"),
        updated_at: new Date("2014-02-14T02:45:17.772Z"),
        clues_count: 10
      }
    }
  ];

  const dataServiceSpy = jasmine.createSpyObj('DataService', ['getClues']);
  dataServiceSpy.getClues.and.returnValue(of(expectedClues));

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
   
    fixture = TestBed.createComponent(CluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show title', () => {
    const de: DebugElement = fixture.debugElement;
    const headerDe = de.query(By.css('h3'));
    const header: HTMLElement = headerDe.nativeElement;
    expect(header.textContent.trimLeft().trimRight()).toEqual(component.title);
  });

  it('should retrieve the clues for dates', () => {
    component.getClues({startDate: new Date("2013-07-11T12:00:00.000Z"), endDate: new Date("2013-07-11T12:00:00.000Z")})
    expect(component.clues[0].answer).toEqual("raise");
    expect(component.filteredClues[0].answer).toEqual("raise");
    expect(component.clues.length).toEqual(2);
    expect(component.filteredClues.length).toEqual(2);
  });

  it('should filter clues', () => {
    component.getClues({startDate: new Date("2013-07-11T12:00:00.000Z"), endDate: new Date("2013-07-11T12:00:00.000Z")})
    component.filterChanged("flush")
    expect(component.clues[0].answer).toEqual("raise");
    expect(component.filteredClues[0].answer).toEqual("flush");
    expect(component.clues.length).toEqual(2);
    expect(component.filteredClues.length).toEqual(1);
  });

});
