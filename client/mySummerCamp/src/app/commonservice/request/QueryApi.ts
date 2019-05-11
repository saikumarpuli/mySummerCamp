import { Injectable } from '@angular/core';
import {UserEndPoint} from './../../commonservice/request/userEndPoint';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QueryApi {
  constructor(private http: HttpClient) {
  }
  doGet(url: any, params: any) {
     url = UserEndPoint(url, params);
       return this.http.get(url, {params});
  }

  doPost(url: any, params: any) {
    url = UserEndPoint(url, params);
      return this.http.post(url, params );
  }
}

  /*
  doDelete(url: any, params: any) {
    url = UserEndPoint(url, params);
    return this.http.delete(url, params);
  }
  doPut(url: any, params: any) {
    url = UserEndPoint(url, params);
    console.log(url);
    return this.http.put(url, params);
  }*/

