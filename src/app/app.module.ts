import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesActionsComponent } from './components/courses/courses-actions/courses-actions.component';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { UserAuthorizationComponent } from './components/header/user-authorization/user-authorization.component';

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
    UserAuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
