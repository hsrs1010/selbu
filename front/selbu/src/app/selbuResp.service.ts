import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SelbuResp } from './selbuResp'; 

@Injectable({
    providedIn: 'root'
  })

export class SelbuRespService {
    private pageUrl ='http://localhost:8080'

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient
      ) { }

    private extractData(res: Response) {
        let body = res;
       return body || { };
    }

    getBuildingsPage(page:number): Observable<SelbuResp>{
        const pageUrl = `${this.pageUrl}/page?page=${page}`
        // console.log(this.http.get<Selbu[]>(pageUrl, this.httpOptions))
        return this.http.get<SelbuResp>(pageUrl, this.httpOptions)
    }
    
    getBuildingsPageInfo(): Observable<SelbuResp>{
        const pageUrl = `${this.pageUrl}/page`
        // console.log(this.http.get<Selbu[]>(pageUrl, this.httpOptions))
        return this.http.get<SelbuResp>(pageUrl, this.httpOptions)
    }

    getBuildingsTotalPages(): Observable<any>{
        const pageUrl = `${this.pageUrl}/page`
        console.log(this.http.get<number>(pageUrl, this.httpOptions))
        return this.http.get<number>(pageUrl, this.httpOptions)
    }
}