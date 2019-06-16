import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesGridComponent } from './categories-grid.component';
import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('CategoriesGridComponent', () => {
  let component: CategoriesGridComponent;
  let fixture: ComponentFixture<CategoriesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesGridComponent, RouterLinkDirectiveStub ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
