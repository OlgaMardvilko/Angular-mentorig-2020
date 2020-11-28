import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ICourse } from '../../../models/course.model';
import { CoursesService } from 'src/app/services/courses.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})

export class CoursesListComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public coursesList: ICourse[] = [];
  private destroy$ = new Subject();

  @Input() courses: ICourse[];

  constructor(private coursesService: CoursesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Lifecycle hook');
    if (changes.courses) {
      this.coursesList = changes.courses.currentValue;
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit Lifecycle hook');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck Lifecycle hook');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Lifecycle hook');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Lifecycle hook');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Lifecycle hook');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Lifecycle hook');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onEditCourse(courseId: string): void {
    console.log('edit course action handler, for future', courseId);
  }

  onDeleteCourse(courseId: string): void {
    this.coursesService
      .removeCourse(courseId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.coursesList = res);
  }

  loadMore(): void {
    console.log('handler for LOAD MORE action');
  }

}
