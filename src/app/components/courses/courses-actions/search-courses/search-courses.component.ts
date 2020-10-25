import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-courses',
  templateUrl: './search-courses.component.html',
  styleUrls: ['./search-courses.component.scss']
})
export class SearchCoursesComponent implements OnInit {

  public searchForm: FormGroup;

  @Output() search = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      coursesSearch: ['']
    });
  }

  searchCourse(): void {
    const searchValue = this.searchForm.value;
    this.search.emit(searchValue.coursesSearch);
  }

}
