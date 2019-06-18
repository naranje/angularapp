import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { IClue } from 'src/app/shared/interfaces/iclue';
import { of } from 'rxjs';
import { ICategory } from 'src/app/shared/interfaces/icategory';

describe('DataService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let dataService: DataService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    dataService = new DataService(<any>httpClientSpy);
  });

  it('should return a random clue', () => {
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

    httpClientSpy.get.and.returnValue(of([expectedClue]));

    dataService.getRandomClue().subscribe(
      clue => expect(clue).toEqual(expectedClue), fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return a category clue', () => {
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

    httpClientSpy.get.and.returnValue(of([expectedClue]));

    dataService.getCategoryClues(1).subscribe(
      clue => expect(clue).toEqual([expectedClue]), fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return a clues', () => {
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

    httpClientSpy.get.and.returnValue(of([expectedClue]));

    dataService.getClues(new Date("2013-07-01T12:00:00.000Z"), new Date("2013-07-14T12:00:00.000Z")).subscribe(
      clue => expect(clue).toEqual([expectedClue]), fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return categories', () => {
    const expectedPageOneCategories: ICategory[] = [{
      id: 11381,
      title: "everything from c to d",
      created_at: new Date("2014-02-14T02:45:17.772Z"),
      updated_at: new Date("2014-02-14T02:45:17.772Z"),
      clues_count: 5
    }];

    httpClientSpy.get.and.returnValue(of(expectedPageOneCategories));

    dataService.getCategoriesPage(1, 100).subscribe(
      categories => expect(categories).toEqual(expectedPageOneCategories), fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
