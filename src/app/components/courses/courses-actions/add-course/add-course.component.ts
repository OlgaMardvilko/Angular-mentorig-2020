import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addCourse(): void {
    console.log('handler for future action ADD COURSE');
  }

}
