import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pageable } from './pageable';

@Injectable({
    providedIn: 'root'
  })

export class PageableService {
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

    getBuildingsPage(page:number): Observable<Pageable>{
        const pageUrl = `${this.pageUrl}/page?page=${page}`
        // console.log(this.http.get<Selbu[]>(pageUrl, this.httpOptions))
        return this.http.get<Pageable>(pageUrl, this.httpOptions)
    }
}