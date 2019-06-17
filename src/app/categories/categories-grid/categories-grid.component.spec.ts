import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesGridComponent } from './categories-grid.component';
import { Directive, Input, HostListener, DebugElement } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/icategory';
import { By } from '@angular/platform-browser';

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
  let linkDes: DebugElement[];
  let routerLinks: RouterLinkDirectiveStub[]

  const categories: ICategory[] = [{
    id: 11302,
    title: "the tool shed",
    created_at: new Date("2014-02-14T02:45:17.772Z"),
    updated_at: new Date("2014-02-14T02:45:17.772Z"),
    clues_count: 15
  }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesGridComponent, RouterLinkDirectiveStub ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesGridComponent);
    component = fixture.componentInstance;
    component.categories = categories;
    fixture.detectChanges();

    linkDes = fixture.debugElement
    .queryAll(By.directive(RouterLinkDirectiveStub));

    routerLinks = linkDes.map(de => de.injector.get(RouterLinkDirectiveStub));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display category id', () => {
    const de: DebugElement = fixture.debugElement;
    const tableDe = de.query(By.css('table'));
    const table: HTMLElement = tableDe.nativeElement;
    expect(table.textContent).toContain("11302");
  });

  it('should display category title', () => {
    const de: DebugElement = fixture.debugElement;
    const tableDe = de.query(By.css('table'));
    const table: HTMLElement = tableDe.nativeElement;
    expect(table.textContent).toContain("the tool shed");
  });

  it('should display category clue count', () => {
    const de: DebugElement = fixture.debugElement;
    const tableDe = de.query(By.css('table'));
    const table: HTMLElement = tableDe.nativeElement;
    expect(table.textContent).toContain("15");
  });

  it('can get RouterLinks from template', () => {
    expect(routerLinks.length).toBe(1, 'should have 1 routerLinks');
    expect(routerLinks[0].linkParams).toEqual(['/category', 11302]);
  });

  it('can click category link in template', () => {
    const categoryLinkDe = linkDes[0];
    const categoryLink = routerLinks[0];

    expect(categoryLink.navigatedTo).toBeNull('should not have navigated yet');

    categoryLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();
  
    expect(categoryLink.navigatedTo).toEqual(['/category', 11302]);
  });
});
