import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Validators } from '@angular/forms';
import {StudentService} from "../student.service";


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

   constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,private service:StudentService) {
   }

   ngOnInit() {
     this.route.queryParams.subscribe(params => {
       this.details = params;
     });
     this.registerForm = this.formBuilder.group({
       course: ['', [Validators.required]],
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
     this.studentdata = value
      // stop here if form is invalid
     if (this.registerForm.invalid) {
        return;
     }

     else if ((this.registerForm.value.course.toLocaleLowerCase()).localeCompare(this.details.name.toLocaleLowerCase()) == 0) {
       this.postStudentDetails(this.studentdata);
       console.log(this.studentdata);
       alert(value.firstName + "  Enrolled sucessfully");
       location.reload();
      }
     else {
       alert("Course name should be selected one");
     }
   }
   postStudentDetails(formdata){
   this.service.PostStudentDetails(formdata).subscribe(users=>{
    console.log(users);
  });
}
 }
