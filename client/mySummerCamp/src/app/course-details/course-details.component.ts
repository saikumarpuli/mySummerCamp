import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../course.service";
import {NgFlashMessageService} from "ng-flash-messages";
import {Router} from '@angular/router';

 @Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
   AddCourseForm: FormGroup;
   submitted = false;
   public coursedata: any;
   constructor(private router: Router,private formBuilder: FormBuilder, private service: CourseService,
               private ngFlashMessageService: NgFlashMessageService) {
   }
   ngOnInit() {
     this.AddCourseForm = this.formBuilder.group({
       name:  ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-Z]+$/)]],
       description: ['', Validators.required],
       duration: ['', [Validators.required]],
       noOfDays: ['', [Validators.required]],
       Coach: ['', [Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-Z]+$/)]],
       fee: ['', Validators.required],
     });
   }
   // convenience getter for easy access to form fields
   get f() {
     return this.AddCourseForm.controls;
   }
   onSubmit(value) {
     this.submitted = true;
     this.coursedata = value;
      if (this.AddCourseForm.invalid) {
       return;
     }
     else{
       this.postCourseDetails(this.coursedata);
        this.ngFlashMessageService.showFlashMessage({
           messages: ["course added sucessfully"],
           dismissible: true,
           timeout: 5000,
           type: 'success'
        });
      }
   }
   postCourseDetails(formdata) {
      this.service.postCourseDetails(formdata).subscribe(users => {
        this.router.navigate(['/courselist'],{ skipLocationChange: true })

      });
   }
 }
