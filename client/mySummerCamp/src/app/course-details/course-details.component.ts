import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from "@angular/forms";
 @Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
   AddCourseForm: FormGroup;
   submitted = false;

   constructor(private formBuilder: FormBuilder) { }

   ngOnInit() {
     this.AddCourseForm = this.formBuilder.group({
       name: ['', Validators.required],
       description: ['', Validators.required],
       duration: ['', [Validators.required]],
       noOfDays: ['', [Validators.required]],
       Coach: ['', Validators.required],
       fee: ['', Validators.required],
     });
   }

   // convenience getter for easy access to form fields
   get f() { return this.AddCourseForm.controls; }

   onSubmit() {
     this.submitted = true;

     // stop here if form is invalid
     if (this.AddCourseForm.invalid) {
       return;
     }

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.AddCourseForm.value))
   }
 }
