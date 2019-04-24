import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { Validators } from '@angular/forms';
import {CourseService} from "../course.service";


 @Component({
  selector: 'app-course-enrol',
  templateUrl: './course-enrol.component.html',
  styleUrls: ['./course-enrol.component.css']
})
export class CourseEnrolComponent implements OnInit {
   public details: any;
   registerForm: FormGroup;
   submitted = false;
   private coursedata: any;

   constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,private service:CourseService) {
   }

   ngOnInit() {
     this.route.queryParams.subscribe(params => {
       this.details = params;
     });
     this.registerForm = this.formBuilder.group({
       coursename: ['', [Validators.required]],
       firstName: ['', Validators.required],
       lastName: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
     });
   }

   // convenience getter for easy access to form fields
   get f() {
     return this.registerForm.controls;
   }

   onSubmit(value) {
     this.submitted = true;
     this.coursedata = value

     // stop here if form is invalid
     if (this.registerForm.invalid) {
       return;
     }

    /* if ((this.registerForm.value.coursename.toLocaleLowerCase()).localeCompare(this.details.name.toLocaleLowerCase()) == 0) {
       this.postCourseDetails(this.coursedata)
       location.reload();     } else {
       alert("Course name should be selected one");
     }
   }
   postCourseDetails(formdata){
  //console.log("------------------",formdata)
  this.service.postCourseDetails(formdata).subscribe(users=>{
    console.log(users);
  });
*/}
 }
