import { Component, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ICourse } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit, OnChanges {

  @Input() course: ICourse;
  @Output() editCourse = new EventEmitter();
  @Output() deleteCourse = new EventEmitter();

  public courseItem: ICourse = null;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.course) {
      this.courseItem = simpleChanges.course.currentValue;
      console.log('this.courseItem onChanges', this.courseItem);
    }
  }

  onEditCourse(courseId: string): void {
    this.editCourse.emit(courseId);
  }

  onDeleteCourse(courseId: string): void {
    this.deleteCourse.emit(courseId);
  }

}
