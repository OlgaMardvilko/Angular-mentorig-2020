import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit {

  public addCourseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createAddCourseForm();
  }

  addCourse(): void {
    const courseData = this.addCourseForm.value;
    this.coursesService.createCourse(courseData);
    this.router.navigate(['courses']);
  }

  private createAddCourseForm(): void {
    this.addCourseForm = this.fb.group({
      title: [''],
      description: [''],
      duration: [''],
      date: [''],
      authors: ['']
    });
  }

}
