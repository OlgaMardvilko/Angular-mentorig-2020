import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AddCourseComponent } from './add-course.component';

describe('#AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addCourse once clicked', () => {
    const spy = spyOn(component, 'addCourse');
    const button = fixture.debugElement.query(By.css('button'));

    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should log message when call addCourse', () => {
    const consoleSpy = spyOn(console, 'log');

    component.addCourse();

    expect(consoleSpy).toHaveBeenCalled();
  });
});
