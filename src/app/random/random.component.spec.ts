import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomComponent } from './random.component';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { IClue } from '../shared/interfaces/iclue';
import { of } from 'rxjs';
import { DataService } from '../core/services/data.service';

describe('RandomComponent', () => {
  let component: RandomComponent;
  let fixture: ComponentFixture<RandomComponent>;
  const expectedClue: IClue = {
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
  };

  beforeEach(() => {
    const dataServiceSpy = jasmine.createSpyObj('DataService', ['getRandomClue']);
    dataServiceSpy.getRandomClue.and.returnValue(of(expectedClue));

    TestBed.configureTestingModule({
      declarations: [ RandomComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [{provide: DataService, useValue: dataServiceSpy}]
    });

    fixture = TestBed.createComponent(RandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve a random clue', () => {
    expect(component.clue).toBe(expectedClue)
  });

});
