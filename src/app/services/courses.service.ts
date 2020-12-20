import { Injectable } from '@angular/core';
import { ICourse, ICoursesParams } from 'src/app/models/course.model';
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

  constructor(private http: HttpClient) {}

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

    return this.http.get<ICourse[]>(COURSES_API_URL, {params: httpParams});
  }

  createCourse(course: ICourse): Observable<ICourse> {
    return this.http.post<ICourse>(COURSES_API_URL, course);
  }

  getCourseById(courseId: string): Observable<ICourse> {
    return this.http.get<ICourse>(COURSES_API_URL + `/${courseId}`);
  }

  updateCourse(course: ICourse): Observable<ICourse> {
    return this.http.put<ICourse>(COURSES_API_URL + `/${course.id}`, course);
  }

  removeCourse(courseId: string): Observable<ICourse> {
    return this.http.delete<ICourse>(COURSES_API_URL + `/${courseId}`);
  }
}
