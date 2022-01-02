import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Selbu } from './selbu';


@Injectable({
  providedIn: 'root'
})
export class SelbuService {
  private url = 'http://localhost:8080/selbu';
  private pageUrl ='http://localhost:8080'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  // options: {
  //   headers?: HttpHeaders | { [header: string]: string | string[]; };
  //   observe?: 'body' | 'events' | 'response';
  //   params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; };
  //   reportProgress?: boolean;
  //   responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  //   withCredentials?: boolean;
  // } | undefined

  constructor(
    private http: HttpClient
  ) { }

  getBuildings(): Observable<Selbu[]>{
    return this.http.get<Selbu[]>(this.url)
  }

  // getBuildingsPage(page:number): Observable<Selbu[]>{
  //   const pageUrl = `${this.pageUrl}/page?page=${page}`
  //   // console.log(this.http.get<Selbu[]>(pageUrl, this.httpOptions))
  //   return this.http.get<Selbu[]>(pageUrl, this.httpOptions)
  // }

  getBuilding(id:number): Observable<Selbu>{
    const url = `${this.url}/${id}`;
    return this.http.get<Selbu>(url, this.httpOptions)
  }

  addBuilding(selbu: Selbu): Observable<Selbu>{
    return this.http.post<Selbu>(this.url, selbu, this.httpOptions)
  }

  updateBuilding(selbu: Selbu, id:number): Observable<any>{
    return this.http.put(`${this.url}/${id}`,selbu, this.httpOptions)
  }

  deleteBuilding(id:number): Observable<Selbu>{
    return this.http.delete<Selbu>(`${this.url}/${id}`,this.httpOptions)
  }

  searchBuilding(term: string): Observable<Selbu[]> {
    if (!term.trim()) {
      // 입력된 내용이 없으면 빈 배열을 반환합니다.
      return of([]);
    }
    return this.http.get<Selbu[]>(`${this.url}/search/${term}`)
  }
}
