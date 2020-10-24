import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesActionsComponent } from './components/courses/courses-actions/courses-actions.component';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { UserAuthorizationComponent } from './components/header/user-authorization/user-authorization.component';
import { SearchCoursesComponent } from './components/courses/courses-actions/search-courses/search-courses.component';
import { AddCourseComponent } from './components/courses/courses-actions/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CoursesComponent,
    CoursesActionsComponent,
    CoursesListComponent,
    LogoComponent,
    UserAuthorizationComponent,
    SearchCoursesComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
