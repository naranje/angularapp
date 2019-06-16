import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRouteStub } from '../../test/activated-route-stub';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DataService } from '../core/services/data.service';
import { IClue } from '../shared/interfaces/iclue';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ CategoryComponent ],
  //     providers: [
  //       {provide: ActivatedRoute, useValue: activatedRouteStub},
  //       {provide: DataService, useValue: dataServiceSpy}
  //     ],
  //     schemas: [ NO_ERRORS_SCHEMA ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    const expectedClues: IClue[] = [{
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
    }];

    const dataServiceSpy = jasmine.createSpyObj('DataService', ['getCategoryClues']);
    dataServiceSpy.getCategoryClues.and.returnValue(of(expectedClues));
    
    const activatedRouteStub = new ActivatedRouteStub();
    activatedRouteStub.setParamMap({id: 15784});

    TestBed.configureTestingModule({
      declarations: [ CategoryComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRouteStub},
        {provide: DataService, useValue: dataServiceSpy}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
