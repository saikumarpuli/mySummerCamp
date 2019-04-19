import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-course-enrol',
  templateUrl: './course-enrol.component.html',
  styleUrls: ['./course-enrol.component.css']
})
export class CourseEnrolComponent implements OnInit {

  constructor(private route :ActivatedRoute) { }

   public details:any ;
   ngOnInit(): void {
     this.route.queryParams.subscribe(params => {
      this.details=params;
    });
    }

}
