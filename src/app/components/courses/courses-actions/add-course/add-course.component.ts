import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  @Output() addCourse = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  addCourseClick(): void {
    this.addCourse.emit(true);
    console.log('handler for future action ADD COURSE');
  }

}
