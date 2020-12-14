import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// modules
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { LoginPageModule } from './modules/login-page/login-page.module';
// directives
import { BorderColorDirective } from '../app/directives/border-color.directive';
// pipes
import { TimePipe } from './pipes/time.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
// components
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
import { CourseItemComponent } from './components/courses/course-item/course-item.component';
import { ConfirmDeleteDialogComponent } from './components/courses/confirm-delete-dialog/confirm-delete-dialog.component';
import { AddCoursePageComponent } from './components/courses/add-course-page/add-course-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
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
    AddCourseComponent,
    CourseItemComponent,
    ConfirmDeleteDialogComponent,
    AddCoursePageComponent,
    NotFoundComponent,
    BorderColorDirective,
    TimePipe,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LoginPageModule
  ],
  providers: [FilterPipe],
  entryComponents: [ConfirmDeleteDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
