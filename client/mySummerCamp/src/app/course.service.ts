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
  getCourseDetails(params):Observable<any>{
       return this.queryApi.doGet('COURSEDETAILS',params)
      .pipe(
        catchError(err => of([err]))
      );

  }
  postCourseDetails(params):Observable<any>{
    return this.queryApi.doPost('POSTCOURSE',params)
      .pipe(
        catchError(err => of([err]))
      );
  }
  getCoursedetails(id):Observable<any>{
 return this.queryApi.doGet('GETCOURSE',id)
      .pipe(
        catchError(err => of([err]))
      );
  }
}
