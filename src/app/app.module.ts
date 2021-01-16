import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { LoaderInterceptor } from './helpers/loader.interceptor';
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
import { LoaderComponent } from './components/loader/loader.component';
import { UserLoginComponent } from './components/header/user-authorization/user-login/user-login.component';
import { UserLogoutComponent } from './components/header/user-authorization/user-logout/user-logout.component';
// store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer, appEffects } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
    LoaderComponent,
    UserLoginComponent,
    UserLogoutComponent,
    BorderColorDirective,
    TimePipe,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LoginPageModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    FilterPipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  entryComponents: [ConfirmDeleteDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
