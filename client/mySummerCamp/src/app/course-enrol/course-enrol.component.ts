import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Validators } from '@angular/forms';
import {StudentService} from "../student.service";
import {NgFlashMessageService} from "ng-flash-messages";
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

   constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder,
               private service: StudentService, private ngFlashMessageService: NgFlashMessageService) {
   }

   ngOnInit() {
     this.getdata();
     this.route.queryParams.subscribe(params => {
       this.details = params;
     });
     this.getenrolldata();
     this.registerForm = this.formBuilder.group({
       course: [this.details.name],
       firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
       lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
       email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
       trainingcourse_id: [this.details.id]
     });
   }

   // convenience getter for easy access to form fields
   get f() {
     return this.registerForm.controls;
   }

   getdata() {
     this.service.getStudentDetails().subscribe((response) => {
       this.students = response;
     })
   }

   getenrolldata() {
     this.service.getEnrolledDetails(this.details.name).subscribe((response) => {
       this.enrolled = response;
       console.log(this.enrolled);
     })
   }

   get() {
     this.id = true;
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
         this.postStudentDetails(this.studentdata);
         this.ngFlashMessageService.showFlashMessage({
           messages: ["Enrolled sucessfully"],
           dismissible: true,
           timeout: 5000,
           type: 'success'
         });
       }
     }
   }

   postStudentDetails(formdata) {
     this.service.PostStudentDetails(formdata).subscribe(users => {
       this.router.navigate(['/studentDetails'], {skipLocationChange: true})
     });
   }

  /* getRegisterd() {
     for (let student of this.students) {
       if (this.details.name.toLowerCase().localeCompare(student.course.toLowerCase()) == 0) {
         this.enrolled=student;
       }
     }
      console.log(this.enrolled);
   }*/
 }

