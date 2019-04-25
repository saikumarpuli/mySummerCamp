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
    console.log("object in service-----",params)
    return this.queryApi.doPost('POSTSTUDENT',params)
      .pipe(
        catchError(err => of([err]))
      );
  }
}
