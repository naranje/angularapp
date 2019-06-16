import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesComponent } from './categories.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { of } from 'rxjs';
import { ICategory } from '../shared/interfaces/icategory';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ CategoriesComponent ],
  //     providers: [
  //       {provide: DataService, useValue: dataServiceSpy}
  //     ],
  //     schemas: [ NO_ERRORS_SCHEMA ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    const expectedCategories: ICategory[] = [{
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
    },]

    const dataServiceSpy = jasmine.createSpyObj('DataService', ['getCategoriesPage']);
    dataServiceSpy.getCategoriesPage.and.returnValue(of(expectedCategories));

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
});
