import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';
import { IClue } from 'src/app/shared/interfaces/iclue';

describe('FilterService', () => {
  const itemsToFilter: IClue[] = [
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
      id: 86092,
      answer: "(Nelson) Mandela",
      question: "F.W. De Klerk & this man went halfsies on the 1993 Peace Prize for the peaceful termination of apartheid",
      value: 800,
      airdate: new Date("2008-03-19T12:00:00.000Z"),
      created_at: new Date("2014-02-11T23:43:37.343Z"),
      updated_at: new Date("2014-02-11T23:43:37.343Z"),
      category_id: 11286,
      game_id: null,
      invalid_count: null,
      category: {
        id: 11286,
        title: "the nobel peace prize",
        created_at: new Date("2014-02-11T23:43:36.714Z"),
        updated_at: new Date("2014-02-11T23:43:36.714Z"),
        clues_count: 15
      }
    },
    {
      id: 114189,
      answer: "(Martin Luther) King (Jr.)",
      question: "In his acceptance speech, Pres. Obama quoted this 1964 American recipient saying, \"violence never brings permanent peace\"",
      value: 200,
      airdate: new Date("2011-11-03T12:00:00.000Z"),
      created_at: new Date("2014-02-14T02:43:57.490Z"),
      updated_at: new Date("2014-02-14T02:43:57.490Z"),
      category_id: 11286,
      game_id: null,
      invalid_count: null,
      category: {
        id: 11286,
        title: "the nobel peace prize",
        created_at: new Date("2014-02-11T23:43:36.714Z"),
        updated_at: new Date("2014-02-11T23:43:36.714Z"),
        clues_count: 15
      }
    },
  ];

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterService = TestBed.get(FilterService);
    expect(service).toBeTruthy();
  });

  it('should filter by property', () => {
    const service: FilterService = TestBed.get(FilterService);
    const filter = service.filter(itemsToFilter, "MANDELA", ["answer"]);
    expect(filter.length).toBe(1);
    expect(filter[0].question).toContain("apartheid");
  });

  it('should filter using a property in a nested object', () => {
    const service: FilterService = TestBed.get(FilterService);
    const filter = service.filter(itemsToFilter, "POKER", ["category.title"]);
    expect(filter.length).toBe(1);
    expect(filter[0].category.title).toEqual("poker words");
  });

});
