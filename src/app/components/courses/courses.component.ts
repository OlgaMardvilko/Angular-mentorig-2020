import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public searchValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(searchValue: string): void {
    console.log('searchValue', searchValue);
    this.searchValue = searchValue;
  }

}
