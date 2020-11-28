import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-actions',
  templateUrl: './courses-actions.component.html',
  styleUrls: ['./courses-actions.component.scss']
})
export class CoursesActionsComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(searchValue: string): void {
    this.search.emit(searchValue);
  }

}
