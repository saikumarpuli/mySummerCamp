import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { Validators } from '@angular/forms';


 @Component({
  selector: 'app-course-enrol',
  templateUrl: './course-enrol.component.html',
  styleUrls: ['./course-enrol.component.css']
})
export class CourseEnrolComponent implements OnInit {
   public details:any ;
   registerForm: FormGroup;
   submitted = false;

  constructor(private route :ActivatedRoute,private formBuilder: FormBuilder) { }
  ngOnInit() {
     this.route.queryParams.subscribe(params => {
       this.details=params;
     });
     this.registerForm = this.formBuilder.group({
       coursename: ['', [Validators.required]],
       firstName: ['', Validators.required],
       lastName: ['', Validators.required],
       email: ['', [Validators.required, Validators.email]],
     });
   }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   onSubmit() {
     this.submitted = true;

     // stop here if form is invalid
     if (this.registerForm.invalid) {
       return;
     }

     if((this.registerForm.value.coursename.toLocaleLowerCase()).localeCompare(this.details.name.toLocaleLowerCase())==0){
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
     }
     else {
       alert("Course name should be selected one");
     }
   }


   /*onSubmit() {

   }*/
}
