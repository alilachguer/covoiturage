import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Http, Response, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  public result: any;

  getUsersAdmin(): Observable<any>{
    let url: string = "http://localhost:8888/admin/users";
    console.log("appel fonction getUsersAdmin")
    let observable: Observable<any> = this.http.get(url).map((res: Response) => {
      console.log("fonction get url map " + res);
      console.log("result map est "+ this.result);
      this.result = res.json()
      res.json();
      
    });
  
    return observable;
  }

}
