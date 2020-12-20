import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../../models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesListComponent implements OnChanges {

  public coursesList: ICourse[] = [];

  @Input() courses: ICourse[];
  @Output() deleteCourse = new EventEmitter<string>();
  @Output() editCourse = new EventEmitter<string>();
  @Output() loadingMore = new EventEmitter<boolean>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.courses) {
      this.coursesList = changes.courses.currentValue;
    }
  }

  onEditCourse(courseId: string): void {
    this.editCourse.emit(courseId);
  }

  onDeleteCourse(courseId: string): void {
    this.deleteCourse.emit(courseId);
  }

  loadMore(): void {
    this.loadingMore.emit(true);
  }

}
