import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../course.service";
 @Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
   AddCourseForm: FormGroup;
   submitted = false;
   private coursedata: any;

   constructor(private formBuilder: FormBuilder, private service: CourseService) {
   }

   ngOnInit() {
     this.AddCourseForm = this.formBuilder.group({
       name: ['', Validators.required],
       description: ['', Validators.required],
       duration: ['', [Validators.required]],
       noOfDays: ['', [Validators.required]],
       couch: ['', Validators.required],
       fee: ['', Validators.required],
     });
   }

   // convenience getter for easy access to form fields
   get f() {
     return this.AddCourseForm.controls;
   }


   onSubmit(value) {
     this.submitted = true;
     this.coursedata = value

     // stop here if form is invalid
     if (this.AddCourseForm.invalid) {
       return;
     }

     if ((this.AddCourseForm.value.coursename.toLocaleLowerCase()).localeCompare(this.details.name.toLocaleLowerCase()) == 0) {
       this.postCourseDetails(this.coursedata)
       location.reload();
     } else {
       alert("Course name should be selected one");
     }
   }

   postCourseDetails(formdata) {
     //console.log("------------------",formdata)
     this.service.postCourseDetails(formdata).subscribe(users => {
       console.log(users);
     });
   }
 }
