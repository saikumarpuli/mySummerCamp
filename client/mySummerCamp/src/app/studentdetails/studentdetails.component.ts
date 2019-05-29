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
  private page: { pageNo: any; itemsPerPage: any;course:any,firstName:any,lastName:any,email:any};
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
      itemsPerPage: this.itemsperpage,
      course:this.search.course,
      firstName:this.search.firstName,
      lastName:this.search.lastName,
      email:this.search.email
    };

    console.log(this.page,"page1");
    console.log(this.search,"search1")
    this.service.getStudentDetails(this.page).subscribe((response) => {
      this.students = response.rows;
      this.total = response.count;
    })
  }
  getdata() {
    this.page = {
      pageNo: this.pageno,
      itemsPerPage: this.itemsperpage,
      course:this.search.course,
      firstName:this.search.firstName,
      lastName:this.search.lastName,
      email:this.search.email
    };
    console.log(this.page,"page");
    console.log(this.search,"search")
    this.service.getStudentDetails(this.page).subscribe((response) => {
      this.students = response.rows;
      this.total = response.count;
    })

  }

}
