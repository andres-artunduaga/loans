import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { EnvironmentService } from 'app/core/services/environment.service';
import { RequestOptions } from 'app/core/http/request-options';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseApiUrl: string;

  constructor( envService: EnvironmentService, protected http: HttpClient) {
    this.baseApiUrl = envService.getEnvironment().apiUrl;
  }

  // GET Methods
  public get<T>(endpoint: string, option?: RequestOptions): Observable<T>;
  public get(endpoint: string, options: RequestOptions):Observable<any> {
    return this.http.get(`${this.baseApiUrl}/${endpoint}`, options).pipe(
      catchError( err => this.handleError(err) )
    );
  }

  // POST Methods
  public post<T>(endpoint: string, body:any, option?: RequestOptions): Observable<T>;
  public post(endpoint: string, body:any, options: RequestOptions):Observable<any> {
    return this.http.post(`${this.baseApiUrl}/${endpoint}`, body, options).pipe(
      catchError( err => this.handleError(err) )
    );
  }

  // PUT Methods
  public put<T>(endpoint: string, body:any, option?: RequestOptions): Observable<T>;
  public put(endpoint: string, body:any, options: RequestOptions):Observable<any> {
    return this.http.put(`${this.baseApiUrl}/${endpoint}`, body, options).pipe(
      catchError( err => this.handleError(err) )
    );
  }

  // PATCH Methods
  public patch<T>(endpoint: string, body:any, option?: RequestOptions): Observable<T>;
  public patch(endpoint: string, body:any, options: RequestOptions):Observable<any> {
    return this.http.patch(`${this.baseApiUrl}/${endpoint}`, body, options).pipe(
      catchError( err => this.handleError(err) )
    );
  }

  // DELETE Methods
  public delete<T>(endpoint: string, option?: RequestOptions): Observable<T>;
  public delete(endpoint: string, options: RequestOptions):Observable<any> {
    return this.http.delete(`${this.baseApiUrl}/${endpoint}`, options).pipe(
      catchError( err => this.handleError(err) )
    );
  }

  private handleError(err: HttpErrorResponse) {
    // Let's handle errors here, maybe show notifications, for now just a console.log ;)
    console.log('[ApiService]: ', err.error);
    return throwError(err);
  }
}
