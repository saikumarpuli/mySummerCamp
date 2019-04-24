import {Component, OnInit} from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import {CourseService} from "../course.service"
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'mySummerCamp';
  public courses: any;

  constructor(private router: Router,private service:CourseService) { }
 /* data = {
    courses: [
      {
        name:'Java',
        description:'Java is a programming language that produces software for multiple platforms.',
        duration : '1hour',
        noOfDays:'45days',
        Coach:'Suresh',
        fee:'1000Rs'
      },
      {
        name:'MEAN',
        description:'The MEAN stack uses Mongo, Express, Angular(6) and Node for simple and scalable fullstack js applications.',
        duration : '1hour',
        noOfDays:'60days',
        Coach:'Sandeep',
        fee:'2000Rs'
      },
      {
        name:'MERN',
        description:'MERN is a scaffolding tool which makes it easy to build universal apps using Mongo, Express, React, NodeJS, Redux and Webpack.',
        duration : '1hour',
        noOfDays:'60days',
        Coach:'Arun',
        fee:'2000Rs'
      },
      {
        name:'Javascript',
        description:'JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.',
        duration : '1hour',
        noOfDays:'45days',
        Coach:'Krishna',
        fee:'1000Rs'
      }
    ]
  };

  public details:any;
  courses = 'Courses';
*/
 ngOnInit() {
   this.getdata()

 }

  getdata() {
    this.service.getCourseDetails().subscribe((response) => {
      console.log(response);
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
