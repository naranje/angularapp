import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { of } from 'rxjs';
import { ICategory } from '../shared/interfaces/icategory';
import { By } from '@angular/platform-browser';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(() => {
    const expectedPageOneCategories: ICategory[] = [{
      id: 11381,
      title: "everything from c to d",
      created_at: new Date("2014-02-14T02:45:17.772Z"),
      updated_at: new Date("2014-02-14T02:45:17.772Z"),
      clues_count: 5
    },
    {
      id: 11384,
      title: "a, b, c, d then f",
      created_at: new Date("2014-02-14T02:45:17.772Z"),
      updated_at: new Date("2014-02-14T02:45:17.772Z"),
      clues_count: 10
    },];

    const expectedPageTwoCategories: ICategory[] = [{
      id: 11302,
      title: "the tool shed",
      created_at: new Date("2014-02-14T02:45:17.772Z"),
      updated_at: new Date("2014-02-14T02:45:17.772Z"),
      clues_count: 15
    }
    ];

    const dataServiceSpy = jasmine.createSpyObj('DataService', ['getCategoriesPage']);
    dataServiceSpy.getCategoriesPage.withArgs(1, 100).and.returnValue(of(expectedPageOneCategories));
    dataServiceSpy.getCategoriesPage.withArgs(2, 100).and.returnValue(of(expectedPageTwoCategories));

    TestBed.configureTestingModule({
      declarations: [CategoriesComponent],
      providers: [
        { provide: DataService, useValue: dataServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(CategoriesComponent);
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

  it('should retrieve categories for page', () => {
    expect(component.categories[0].title).toEqual("everything from c to d");
    expect(component.filteredCategories[0].title).toEqual("everything from c to d");
    expect(component.categories.length).toEqual(2);
    expect(component.filteredCategories.length).toEqual(2);
    component.getCategoriesPage(2);
    expect(component.categories[0].title).toEqual("the tool shed");
    expect(component.filteredCategories[0].title).toEqual("the tool shed");
    expect(component.categories.length).toEqual(1);
    expect(component.filteredCategories.length).toEqual(1);
  });

  it('should filter categories', () => {
    component.filterChanged("then f");
    expect(component.categories[0].title).toEqual("everything from c to d");
    expect(component.filteredCategories[0].title).toEqual("a, b, c, d then f");
    expect(component.categories.length).toEqual(2);
    expect(component.filteredCategories.length).toEqual(1);
  });

});
