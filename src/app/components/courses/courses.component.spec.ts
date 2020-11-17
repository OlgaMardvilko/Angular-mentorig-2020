import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { ICourse, CoursesFakeData } from 'src/app/models/course.model';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should course data the same as initial after call onSearch without searchValue', () => {
    component.courses = CoursesFakeData;
    const mockSearchValue = component.searchValue = '';
    const expectedCourses = CoursesFakeData;

    component.onSearch(mockSearchValue);

    expect(component.courses).toEqual(expectedCourses);
  });

  it('should not be courses data the same as initial after call onSearch with searchValue', () => {
    component.courses = CoursesFakeData;
    const mockSearchValue = component.searchValue = 'Aaa';
    const expectedCourses = CoursesFakeData;

    component.onSearch(mockSearchValue);

    expect(component.courses).not.toEqual(expectedCourses);
  });

  it('should return valid filtered courses data after call onSearch', () => {
    component.courses = CoursesFakeData;
    const mockSearchValue = component.searchValue = 'course 1';
    const expectedCourses = CoursesFakeData.filter(course => course.title.includes(mockSearchValue));

    component.onSearch(mockSearchValue);

    expect(component.courses).toEqual(expectedCourses);
  });
});
