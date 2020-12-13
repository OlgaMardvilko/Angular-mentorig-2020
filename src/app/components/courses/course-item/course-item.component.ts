import { Component, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourse } from 'src/app/models/course.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit, OnChanges {

  @Input() course: ICourse;
  @Output() editCourse = new EventEmitter();
  @Output() deleteCourse = new EventEmitter();

  get isStarRating(): boolean {
    return this.courseItem.topRated;
  }

  public courseItem: ICourse = null;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.course) {
      this.courseItem = simpleChanges.course.currentValue;
    }
  }

  onEditCourse(courseId: string): void {
    this.editCourse.emit(courseId);
  }

  onDeleteCourse(courseId: string): void {
    this.confirmDelete(courseId);
  }

  confirmDelete(courseId: string): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteCourse.emit(courseId);
      }
    });
  }

}
