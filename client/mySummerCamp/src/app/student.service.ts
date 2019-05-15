import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {QueryApi} from "./commonservice/request/QueryApi";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, private queryApi:QueryApi) { }
  PostStudentDetails(params):Observable<any>{
     return this.queryApi.doPost('POSTSTUDENT',params)
      .pipe(
        catchError(err => of([err]))
      );
  }
  getStudentsDetails():Observable<any>{
   let params
    return this.queryApi.doGet('GETSTUDENT',params)
      .pipe(
        catchError(err => of([err]))
      );
  }
  getStudentDetails(params):Observable<any>{
     return this.queryApi.doGet('POSTSTUDENT',params)
      .pipe(
        catchError(err => of([err]))
      );
  }
  getEnrolledDetails(params):Observable<any>{
      return this.queryApi.doGet('GETENROLLED',params)
      .pipe(
        catchError(err => of([err]))
      );
  }



}
