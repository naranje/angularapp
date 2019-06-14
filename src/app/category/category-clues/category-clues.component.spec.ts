import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCluesComponent } from './category-clues.component';

describe('CategoryCluesComponent', () => {
  let component: CategoryCluesComponent;
  let fixture: ComponentFixture<CategoryCluesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryCluesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
