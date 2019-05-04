import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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
   constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,private service:StudentService,private ngFlashMessageService: NgFlashMessageService) {
   }

   ngOnInit() {
     this.route.queryParams.subscribe(params => {
       this.details = params;
     });
     this.registerForm = this.formBuilder.group({
       course:[this.details.name],
       firstName: ['', Validators.required],
       lastName: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
       trainingcourse_id:[this.details.id]
     });
   }

   // convenience getter for easy access to form fields
   get f() {
     return this.registerForm.controls;
   }

   onSubmit(value) {
     this.submitted = true;
     this.studentdata = value;
     if (this.registerForm.invalid) {
       console.log("fuckoff");
        return;
     }
     else  {
        this.postStudentDetails(this.studentdata);
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Enrolled sucessfully"],
          dismissible: true,
          timeout: 5000,
          type:'success'
     });
     }
   }
   postStudentDetails(formdata){
   this.service.PostStudentDetails(formdata).subscribe(users=>{
     console.log(formdata);
  });
   }
 }
