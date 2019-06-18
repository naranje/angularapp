import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomClueComponent } from './random-clue.component';
import { IClue } from 'src/app/shared/interfaces/iclue';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('RandomClueComponent', () => {
  let component: RandomClueComponent;
  let fixture: ComponentFixture<RandomClueComponent>;
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RandomClueComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomClueComponent);
    component = fixture.componentInstance;
    component.clue = expectedClue;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display answer', () => {
    const de: DebugElement = fixture.debugElement;
    const tableDe = de.query(By.css('#answer'));
    const table: HTMLElement = tableDe.nativeElement;
    expect(table.textContent).toContain("raise");
  });

  it('should display question', () => {
    const de: DebugElement = fixture.debugElement;
    const tableDe = de.query(By.css('#question'));
    const table: HTMLElement = tableDe.nativeElement;
    expect(table.textContent).toContain("An increase in wages");
  });

  it('should display value', () => {
    const de: DebugElement = fixture.debugElement;
    const tableDe = de.query(By.css('#value'));
    const table: HTMLElement = tableDe.nativeElement;
    expect(table.textContent).toContain("200");
  });

  it('should display category title', () => {
    const de: DebugElement = fixture.debugElement;
    const tableDe = de.query(By.css('h2'));
    const table: HTMLElement = tableDe.nativeElement;
    expect(table.textContent).toContain("poker words");
  });

});
