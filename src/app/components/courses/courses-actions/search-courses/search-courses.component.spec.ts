import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SearchCoursesComponent } from './search-courses.component';

describe('#SearchCoursesComponent', () => {
  let component: SearchCoursesComponent;
  let fixture: ComponentFixture<SearchCoursesComponent>;
  let searchButtonDe: DebugElement;
  let searchButtonEl: HTMLElement;
  let expectedSearchValue: string;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ SearchCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCoursesComponent);
    component = fixture.componentInstance;
    searchButtonDe = fixture.debugElement.query(By.css('.search-btn'));
    searchButtonEl = searchButtonDe.nativeElement;

    expectedSearchValue = 'Test value';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit valid data when call searchCourse method', () => {
    let searchValue: string;
    component.search.subscribe((value: string) => searchValue = expectedSearchValue);

    component.searchCourse();
    expect(searchValue).toBe(expectedSearchValue);
  });

  it('should raise search event when clicked (triggerEventHandler)', () => {
    let searchValue: string;
    component.search.subscribe((value: string) => searchValue = expectedSearchValue);

    searchButtonDe.triggerEventHandler('click', null);
    expect(searchValue).toBe(expectedSearchValue);
  });

  it('should raise search event when clicked (element.click)', () => {
    let searchValue: string;
    component.search.subscribe((value: string) => searchValue = expectedSearchValue);

    searchButtonEl.click();
    expect(searchValue).toBe(expectedSearchValue);
  });
});
