import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-courses-actions',
  templateUrl: './courses-actions.component.html',
  styleUrls: ['./courses-actions.component.scss']
})
export class CoursesActionsComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      coursesSearch: ['']
    });
  }

}
