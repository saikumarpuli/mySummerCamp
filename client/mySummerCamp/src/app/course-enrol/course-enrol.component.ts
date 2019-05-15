import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Validators } from '@angular/forms';
import {StudentService} from "../student.service";
import {NgFlashMessageService} from "ng-flash-messages";
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
   private studentdata: any;
   private students: any;
   private flag: number = 0;
   private id: boolean;
   i: number = 0;
   private enrolled: any;
   p: any;
   enroll: any;
   _id: number;
   private name: any;

   constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder,
               private service: StudentService,private courseService:CourseService,   private ngFlashMessageService: NgFlashMessageService) {
   }

   private getcoursedetails() {
     this.courseService.getCoursedetails(this._id).subscribe((response) => {
       this.details = response;
       })
   }
   ngOnInit() {
     this.route.params.subscribe(params => {
       this._id = params.id;
       this.name=params.name;
         });
     this.getcoursedetails();
      this.getdata();
      this.getenrolldata();
      this.registerForm = this.formBuilder.group({
        course: [this.name],
        firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
        lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
        email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
        trainingcourse_id: [this._id]
      });

   }
   // convenience getter for easy access to form fields
   get f() {
     return this.registerForm.controls;
   }

   getdata() {
     this.service.getStudentsDetails().subscribe((response) => {
       this.students = response;

     })
   }
   getenrolldata() {
     this.service.getEnrolledDetails(this._id).subscribe((response) => {
       this.enrolled = response;
      })
   }

   get() {
     this.id = true;
     this.enroll=false;
   }

   onSubmit(value) {
     this.submitted = true;
     this.studentdata = value;
     if (this.registerForm.invalid) {
       return;
     } else {
       for (let student of this.students) {
         if (value.email.toLowerCase().localeCompare(student.email.toLowerCase()) == 0) {
           this.flag = 1;
         }
       }
       if (this.flag == 1) {
         this.ngFlashMessageService.showFlashMessage({
           messages: ["Email already Registerd "],
           dismissible: true,
           timeout: 5000,
           type: 'danger'
         });
       } else {
         this.ngFlashMessageService.showFlashMessage({
           messages: ["Enrolled sucessfully"],
           dismissible: true,
           timeout: 5000,
           type: 'success'
         });
         this.postStudentDetails(this.studentdata);
       }
     }
   }

   postStudentDetails(formdata) {
     this.service.PostStudentDetails(formdata).subscribe(users => {
       this.router.navigate(['/studentDetails'], {skipLocationChange: true})
     });
   }

   getRegisterd() {
     this.enroll = true;
     this.id=false;
   }

 }

