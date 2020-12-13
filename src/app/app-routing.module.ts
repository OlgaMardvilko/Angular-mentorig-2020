import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CoursesComponent } from './components/courses/courses.component';
import { AddCoursePageComponent } from './components/courses/add-course-page/add-course-page.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/courses' },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'courses/new', pathMatch: 'full', component: AddCoursePageComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', pathMatch: 'full', component: AddCoursePageComponent, canActivate: [AuthGuard] },
  { path: 'auth/login', pathMatch: 'full', component: LoginPageComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
