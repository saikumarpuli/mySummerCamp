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

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseEnrolComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
   ],
  providers: [QueryApi],
  bootstrap: [AppComponent]

})
export class AppModule { }
