import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesActionsComponent } from './courses-actions.component';
import { SearchCoursesComponent } from '../courses-actions/search-courses/search-courses.component';
import { AddCourseComponent } from '../courses-actions/add-course/add-course.component';

describe('CoursesActionsComponent', () => {
  let component: CoursesActionsComponent;
  let fixture: ComponentFixture<CoursesActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesActionsComponent, SearchCoursesComponent, AddCourseComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit valid data when call onSearch method', () => {
    const mockSearchValue = 'Test value';
    let searchValue: string;
    component.search.subscribe((value: string) => searchValue = mockSearchValue);

    component.onSearch(mockSearchValue);

    expect(searchValue).toBe(mockSearchValue);
  });
});
