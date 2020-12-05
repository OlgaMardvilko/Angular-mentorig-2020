import { Injectable } from '@angular/core';
import { ICourse, CoursesFakeData } from 'src/app/models/course.model';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  public addCourse$: Subject<ICourse> = new Subject();
  public updateCourse$: Subject<ICourse> = new Subject();

  private courses: ICourse[];

  constructor() {
    this.courses = CoursesFakeData;
  }

  getCourses(): Observable<ICourse[]> {
    return of(this.courses);
  }

  createCourse(course: ICourse): Observable<ICourse[]> {
    this.courses = [...this.courses, course];
    return(of(this.courses));
  }

  getCourseById(courseId: string): Observable<ICourse> {
    const courseItem = this.courses.find(course => course.id === courseId);
    return(of(courseItem));
  }

  updateCourse(course: ICourse): Observable<ICourse[]> {
    const index = this.courses.findIndex(item => item.id === course.id);
    this.courses = [...this.courses].splice(index, 1, course);
    return(of(this.courses));
  }

  removeCourse(courseId: string): Observable<ICourse[]> {
    this.courses = this.courses.filter(item => item.id !== courseId);
    return(of(this.courses));
  }
}
