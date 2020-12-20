import { Injectable } from '@angular/core';
import { ICourse, CoursesFakeData, ICoursesParams } from 'src/app/models/course.model';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

const COURSES_API_URL = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  public addCourse$: Subject<ICourse> = new Subject();
  public updateCourse$: Subject<ICourse> = new Subject();

  private courses: ICourse[];

  constructor(private http: HttpClient) {
    // this.courses = CoursesFakeData;
  }

  getCourses(params: ICoursesParams): Observable<ICourse[]> {
    let httpParams = new HttpParams();

    if (params.start) {
      httpParams = httpParams.set('start', String(params.start));
    }

    if (params.count) {
      httpParams = httpParams.set('count', String(params.count));
    }

    if (params.textFragment) {
      httpParams = httpParams.set('textFragment', String(params.textFragment));
    }

    // return of(this.courses);
    return this.http.get<ICourse[]>(COURSES_API_URL, {params: httpParams});
  }

  createCourse(course: ICourse): Observable<ICourse[]> {
    this.courses = [...this.courses, course];
    return(of(this.courses));
  }

  getCourseById(courseId: number): Observable<ICourse> {
    const courseItem = this.courses.find(course => course.id === courseId);
    return(of(courseItem));
  }

  updateCourse(course: ICourse): Observable<ICourse[]> {
    const index = this.courses.findIndex(item => item.id === course.id);
    this.courses.splice(index, 1, course);
    return(of(this.courses));
  }

  removeCourse(courseId: string): Observable<ICourse[]> {
    this.courses = this.courses.filter(item => item.id !== courseId);
    return(of(this.courses));
  }
}
