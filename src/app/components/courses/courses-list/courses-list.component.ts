import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICourse } from '../../../models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})

export class CoursesListComponent implements OnInit, OnChanges {
  public coursesList: ICourse[] = [];

  @Input() courses: ICourse[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.courses) {
      this.coursesList = changes.courses.currentValue;
    }
  }

  onEditCourse(courseId: string): void {
    console.log('edit course action handler, for future', courseId);
  }

  onDeleteCourse(courseId: string): void {
    console.log('course delete id', courseId);
    this.coursesList = [...this.coursesList].filter(course => course.id !== courseId);
  }

  loadMore(): void {
    console.log('handler for LOAD MORE action');
  }

}
