import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'mySummerCamp';
  private i: number;
  private position: number;

  constructor() { }
  data = {
    courses: [
      {
        name:'java',
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
        description:'Java is a programming language that produces software for multiple platforms.',
        duration : '1hour',
        noOfDays:'60days',
        Coach:'Arun',
        fee:'2000Rs'
      },
      {
        name:'javascript',
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

  Selectcourse(coursedata){
    this.details=coursedata;
  }

  validateData(position : number){
    this.position = position;

  }
  ngOnInit() {
  }

}
