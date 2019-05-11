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
  p: number;
  search : any={name:'',duration:'',noOfDays:'',Coach:'',fee:''};

  constructor(private router: Router,private service:CourseService) { }
 ngOnInit() {
   this.getdata()
 }
  getdata() {
    this.service.getCourseDetails().subscribe((response) => {
       this.courses = response.reverse();
     })
  }
  navigate(event) {
       this.router.navigate(['/courseEnrol',event],{skipLocationChange: true});
  }
}
