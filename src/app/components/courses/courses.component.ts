import { Component, OnInit } from '@angular/core';
import { ICourse, CoursesFakeData } from 'src/app/models/course.model';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: ICourse[] = [];
  public searchValue: string;

  constructor(private filterPipe: FilterPipe) { }

  ngOnInit(): void {
    this.courses = CoursesFakeData;
  }

  onSearch(searchValue: string): void {
    this.courses = CoursesFakeData;
    const filterByField = 'title';
    const coursesListSearch = this.filterPipe.transform([...this.courses], filterByField, searchValue);
    this.courses = searchValue ? coursesListSearch : this.courses;
  }

}
