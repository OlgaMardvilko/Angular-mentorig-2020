import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-courses',
  templateUrl: './search-courses.component.html',
  styleUrls: ['./search-courses.component.scss']
})
export class SearchCoursesComponent implements OnInit {

  public searchForm: FormGroup;
  public searchTerm$ = new Subject<string>();

  @Output() search = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      coursesSearch: ['']
    });

    this.movieSearchInput();
  }

  movieSearchInput(): void {
    this.searchTerm$.pipe(
      distinctUntilChanged(),
      debounceTime(500),
      map(value => value.trim()),
      filter(value => value.length > 2),
    ).subscribe(res => {
      this.search.emit(res);
    });
  }

}
