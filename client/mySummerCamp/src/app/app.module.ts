import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AppRoutingModule } from './/app-routing.module';
import { CourseEnrolComponent } from './course-enrol/course-enrol.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import {QueryApi} from "./commonservice/request/QueryApi";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgFlashMessagesModule} from "ng-flash-messages";
import {NgxPaginationModule} from "ngx-pagination";
import {FilterPipeModule} from "ngx-filter-pipe";
import { HeaderComponent } from './header/header.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseEnrolComponent,
    CourseDetailsComponent,
    HeaderComponent,
    StudentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgFlashMessagesModule.forRoot(),
    NgxPaginationModule,
    FilterPipeModule,
    Ng2SearchPipeModule
  ],
  providers: [QueryApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
