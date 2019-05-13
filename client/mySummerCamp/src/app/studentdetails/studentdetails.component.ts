import { Component, OnInit } from '@angular/core';
 import {StudentService} from "../student.service";
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  students: any;
  total: any;
  itemsperpage: any = 4;
  private pageno: any = 1;
  private page: { pageNo: any; itemsPerPage: any };
  search: any = {course: '', firstName: '', lastName: '', email: ''};

  constructor(private service: StudentService) {
  }


  ngOnInit() {
    this.getdata()
  }

  getPagination(pageNumber) {

    this.pageno = pageNumber;
    this.page = {
      pageNo: this.pageno,
      itemsPerPage: this.itemsperpage
    };
    this.service.getStudentDetails(this.page).subscribe((response) => {
      this.students = response.rows;
      this.total = response.count;
    })
  }

  getdata() {
    this.page = {
      pageNo: this.pageno,
      itemsPerPage: this.itemsperpage
    };
    this.service.getStudentDetails(this.page).subscribe((response) => {
      this.students = response.rows;
      this.total = response.count;
    })
  }

}
