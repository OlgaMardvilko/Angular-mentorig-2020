import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ICourse, Course, CoursesFakeData } from 'src/app/models/course.model';
import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector : `app-test-host-component`,
  template :
  `<div><app-courses-list [courses]="valueFromHost"></app-courses-list></div>`
})

export class TestHostComponent {
  @ViewChild(CoursesListComponent)
  public coursesListComponent: CoursesListComponent;
  public valueFromHost: ICourse[];
}

const createMockCoursesData = (courseData: ICourse) => {
  const courseItem = new Course(courseData);
  return courseItem;
};

describe('#CourseItemComponent when tested directly', () => {
  let fixture: ComponentFixture<CoursesListComponent>;
  let component: CoursesListComponent;
  let fixtureHost: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let expectedCourse: ICourse[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesListComponent, TestHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixtureHost = TestBed.createComponent(TestHostComponent);
    hostComponent = fixtureHost.componentInstance;

    const mockCourseItem = createMockCoursesData(CoursesFakeData[0]);
    expectedCourse = [mockCourseItem, createMockCoursesData(CoursesFakeData[1])];
  });

  it('should have valid courses @Input data', () => {
    hostComponent.valueFromHost = expectedCourse;
    fixtureHost.detectChanges();

    expect(hostComponent.coursesListComponent.courses).toEqual(expectedCourse);
  });

  it('should emit loadMore once clicked (triggerEventHandler)', () => {
    component.coursesList = [createMockCoursesData(CoursesFakeData[1])];
    fixture.detectChanges();
    const spy = spyOn(component, 'loadMore');
    const button = fixture.debugElement.query(By.css('button'));

    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should emit loadMore once clicked (click)', () => {
    component.coursesList = [createMockCoursesData(CoursesFakeData[1])];
    fixture.detectChanges();
    const spy = spyOn(component, 'loadMore');
    const buttonDe = fixture.debugElement.query(By.css('button'));
    const buttonEl = buttonDe.nativeElement;

    buttonEl.click();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should have valid data coursesList when onDeleteCourse', () => {
    component.coursesList = expectedCourse;
    const deletedItem = createMockCoursesData(CoursesFakeData[0]);
    const expectCoursesList = expectedCourse.filter(item => item.id !== deletedItem.id);

    component.onDeleteCourse(deletedItem.id);

    expect(component.coursesList).toEqual(expectCoursesList);
  });

  it('should render "Not courses find" when not data coursesList', () => {
    component.coursesList = [createMockCoursesData(null)];
    component.coursesList.length = 0;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.not-find').textContent).toContain('Not courses find');
  });
});
