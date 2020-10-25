import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CoursesFakeData, ICourse } from '../../../models/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})

export class CoursesListComponent implements OnInit, OnChanges {
  public coursesList: ICourse[] = [];

  @Input() searchValue: string;

  constructor() { }

  ngOnInit(): void {
    this.coursesList = CoursesFakeData;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.searchValue) {
      const searchValue = changes.searchValue.currentValue;
      this.searchCourse(searchValue);
    }
  }

  onEditCourse(courseId: string): void {
    console.log('edit course action handler, for future', courseId);
  }

  onDeleteCourse(courseId: string): void {
    this.coursesList = [...this.coursesList].filter(course => course.id !== courseId);
  }

  private searchCourse(value: string): void {
    const coursesListSearch = [...this.coursesList].filter(course => course.title.includes(value));
    this.coursesList = value ? coursesListSearch : this.coursesList;
  }

}
