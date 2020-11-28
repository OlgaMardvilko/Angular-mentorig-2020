import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CourseItemComponent } from './course-item.component';
import { ICourse } from 'src/app/models/course.model';

describe('CourseItemComponent class only', () => {
  let comp: CourseItemComponent;
  let course: ICourse;

  beforeEach(() => {
    comp = new CourseItemComponent();
    course = {id: '42', title: 'Test', creationDate: '', duration: 10, description: 'Test description'};
    comp.course = course;
  });

  it('raises the editCourse event when clicked', () => {
    comp.editCourse.subscribe((editCourseId: string) => expect(editCourseId).toBe(course.id));
    comp.onEditCourse(course.id);
  });

  it('raises the deleteCourse event when clicked', () => {
    comp.deleteCourse.subscribe((editCourseId: string) => expect(editCourseId).toBe(course.id));
    comp.onDeleteCourse(course.id);
  });
});

@Component({
  selector : `app-test-host-component`,
  template :
  `<div><app-course-item [course]="valueFromHost"></app-course-item></div>`
})

export class TestHostComponent {
  @ViewChild(CourseItemComponent)
  public courseItemComponent: CourseItemComponent;
  public valueFromHost: ICourse;
}

describe('#CourseItemComponent when tested directly', () => {
  let fixture: ComponentFixture<CourseItemComponent>;
  let component: CourseItemComponent;
  let fixtureHost: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let expectedCourse: ICourse;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, TestHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixtureHost = TestBed.createComponent(TestHostComponent);
    hostComponent = fixtureHost.componentInstance;
    expectedCourse = {id: '42', title: 'Test', creationDate: '', duration: 10, description: 'Test description'};
  });

  it('should have valid course @Input data', () => {
    hostComponent.valueFromHost = {id: '42', title: 'Test', creationDate: '', duration: 10, description: 'Test description'};
    fixtureHost.detectChanges();

    expect(hostComponent.courseItemComponent.course).toEqual(expectedCourse);
  });

  it('should emit onEditCourse once clicked', () => {
    component.courseItem = expectedCourse;
    const spy = spyOn(component, 'onEditCourse');
    const button = fixture.debugElement.query(By.css('.course-actions-edit'));

    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should call onEditCourse with valid param', () => {
    component.courseItem = expectedCourse;
    const spy = spyOn(component, 'onEditCourse');

    component.onEditCourse(component.courseItem.id);

    expect(spy).toHaveBeenCalledWith(expectedCourse.id);
  });

  it('should emit onDeleteCourse once clicked', () => {
    component.courseItem = expectedCourse;
    const spy = spyOn(component, 'onDeleteCourse');
    const button = fixture.debugElement.query(By.css('.course-actions-delete'));

    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should call onDeleteCourse with valid param', () => {
    component.courseItem = expectedCourse;
    const spy = spyOn(component, 'onDeleteCourse');

    component.onDeleteCourse(component.courseItem.id);

    expect(spy).toHaveBeenCalledWith(expectedCourse.id);
  });
});
