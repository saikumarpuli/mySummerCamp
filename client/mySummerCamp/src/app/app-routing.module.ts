import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
import {CoursesComponent} from "./courses/courses.component";
import {CourseEnrolComponent} from "./course-enrol/course-enrol.component";
import {CourseDetailsComponent} from "./course-details/course-details.component";
import {StudentdetailsComponent} from "./studentdetails/studentdetails.component";

const routes: Routes = [
  {path:'courselist', component:CoursesComponent},
  {path:'courseEnrol', component:CourseEnrolComponent},
  {path:'courseEnrol/:id', component:CourseEnrolComponent},

  {path:'courseDetails',component:CourseDetailsComponent},
  {path:'studentDetails',component:StudentdetailsComponent},
  {path: '**', redirectTo : '/courselist', pathMatch: 'full'},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
