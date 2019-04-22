import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {QueryApi} from "./commonservice/request/QueryApi";
import { catchError } from 'rxjs/operators'
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient, private queryApi:QueryApi) { }

  getCourseDetails():Observable<any>{
    let params;
    console.log("&&&&&&&&&&&&&i am in service&&&&&&&&&&&&&&&&&&&&")
    return this.queryApi.doGet('COURSEDETAILS',params)
      .pipe(
        catchError(err => of([err]))
      );
  }
  postCourseDetails(params):Observable<any>{
    console.log("object in service-----",params)
    return this.queryApi.doPost('POSTSPOST',params)
      .pipe(
        catchError(err => of([err]))
      );
  }

}
