import { Component, OnInit } from '@angular/core';
import { ICourse, CoursesFakeData } from 'src/app/models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: ICourse[] = [];
  public searchValue: string;

  constructor() { }

  ngOnInit(): void {
    this.courses = CoursesFakeData;
  }

  onSearch(searchValue: string): void {
    this.courses = CoursesFakeData;
    const coursesListSearch = [...this.courses].filter(course => course.title.includes(searchValue));
    this.courses = searchValue ? coursesListSearch : this.courses;
  }

}
