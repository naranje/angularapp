import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomClueComponent } from './random-clue.component';

describe('RandomClueComponent', () => {
  let component: RandomClueComponent;
  let fixture: ComponentFixture<RandomClueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomClueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomClueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
