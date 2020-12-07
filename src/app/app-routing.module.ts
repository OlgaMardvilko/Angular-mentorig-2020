import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCoursePageComponent } from './components/courses/add-course-page/add-course-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/courses' },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/add', pathMatch: 'full', component: AddCoursePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
