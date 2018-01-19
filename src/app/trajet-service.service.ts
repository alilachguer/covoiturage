import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Http, Response, Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';




@Injectable()
export class TrajetServiceService {

  constructor(private http: Http) { }

  result: any;
    
  headers: Headers = new Headers ({ 'Content-Type': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });

  creationTrajet(dep: string, arr: string, dist: number, temps: number): Observable<any>{
    let url: string = "http://localhost:8888/admin/add";
    
    let obs: Observable<any> = this.http.post(url,
      {"ville_depart": dep, "ville_arrivee": arr, "distance": dist, "temps_moyen": temps}
    , this.options)
      .map((res: Response) => res.json());
      return obs;
  }


  chercherTrajet(parameter: string){
    let url: string = "http://localhost:8888/trajets" + parameter;
    let observable: Observable<any> = this.http.get(url).map(response => response.json());
    return observable;
  }

  getTrajets(param: string): Observable<any>{
    let url: string = "/"+param;
    let observable: Observable<any> = this.http.get(url).map(response => response.json());
    return observable;

  }

}
