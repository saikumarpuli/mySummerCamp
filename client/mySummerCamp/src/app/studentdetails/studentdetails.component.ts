import { Component, OnInit } from '@angular/core';
 import {StudentService} from "../student.service";
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  students: any;
  p: number;
  constructor(private service:StudentService) { }
  ngOnInit() {
    this.getdata()
  }
  getdata() {
    this.service.getStudentDetails().subscribe((response) => {
      this.students = response;
    })
  }
}
