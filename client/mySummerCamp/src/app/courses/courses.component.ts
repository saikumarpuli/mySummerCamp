import {Component, OnInit} from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import {CourseService} from "../course.service"
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
   public courses: any;
  p: number;
  search : any;

  constructor(private router: Router,private service:CourseService) { }
 ngOnInit() {
   this.getdata()
 }
  getdata() {
    this.service.getCourseDetails().subscribe((response) => {
       this.courses = response;
     })
  }
  navigate(event) {
    let naigationExtras: NavigationExtras = {
      queryParams: event
    }
    this.router.navigate(['/courseEnrol'], naigationExtras);
  }


}
