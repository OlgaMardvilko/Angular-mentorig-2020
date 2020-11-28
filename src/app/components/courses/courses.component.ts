import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourse, CoursesFakeData } from 'src/app/models/course.model';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CoursesService } from 'src/app/services/courses.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {

  public courses: ICourse[] = [];
  public searchValue: string;
  private destroy$ = new Subject();

  constructor(
    private filterPipe: FilterPipe,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearch(searchValue: string): void {
    this.getCourses();
    const initialCourses = [...this.courses];
    const filterByField = 'title';
    const coursesListSearch = this.filterPipe.transform([...this.courses], filterByField, searchValue);
    this.courses = searchValue ? coursesListSearch : initialCourses;
  }

  private getCourses(): void {
    this.coursesService
      .getCourses()
      .pipe(takeUntil(this.destroy$))
      .subscribe(courses => this.courses = courses);
  }

}
