import {Component, Input, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-course-enrol',
  templateUrl: './course-enrol.component.html',
  styleUrls: ['./course-enrol.component.css']
})
export class CourseEnrolComponent implements OnInit {

  constructor() { }

  @Input()  public details:any ;

  ngOnInit() {
  }

}
