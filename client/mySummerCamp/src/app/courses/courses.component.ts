import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CourseService} from "../course.service"

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
   public courses: any;
   search : any={name:'',duration:'',noOfDays:'',Coach:'',fee:''};
  total: any;
  itemsperpage: any=4;
  private pageno: any=1;
  private page: { pageNo: any; itemsPerPage: any };

  constructor(private router: Router,private service:CourseService) { }
 ngOnInit() {
   this.getdata()
 }

  getPagination(pageNumber) {

    this.pageno = pageNumber;
    this.page = {
      pageNo: this.pageno,
      itemsPerPage: this.itemsperpage
    };
    this.service.getCourseDetails(this.page).subscribe((response) => {
      this.courses = response.rows;
       this.total=response.count;
    })  }
  getdata() {
    this.page = {
      pageNo: this.pageno,
      itemsPerPage: this.itemsperpage
    };
    this.service.getCourseDetails(this.page).subscribe((response) => {
       this.courses = response.rows;
        this.total=response.count;
       })
  }
  navigate(event) {
       this.router.navigate(['/courseEnrol',event],{skipLocationChange: true});
  }
}
