import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, shareReplay } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiGatewayService {
  reqOptions: HttpHeaders;
  TOKEN_NAME = environment.tokenName;
  appUrl = environment.apiUrl; // localhost:8000

  constructor(private http:HttpClient) {
    this.makeDefaultHttpOption();
  }

  makeDefaultHttpOption() {
    const headers = new HttpHeaders()
      .set('Content-type', 'application/json')
      .set('Authorization', localStorage.getItem(this.TOKEN_NAME));
    this.reqOptions = headers;
  }

  get<T>(url: string):Observable<T>{
    return this.http.get<T>(`${this.appUrl}/${url}`, {headers: this.reqOptions})
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  post<T>(url: string, data: any):Observable<T>{
    return this.http.post<T>(`${this.appUrl}/${url}`, data, {headers: this.reqOptions})
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  put<T>(url: string, data: any):Observable<T>{
    return this.http.put<T>(`${this.appUrl}/${url}`, data, {headers: this.reqOptions})
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  delete<T>(url: string):Observable<T>{
    return this.http.delete<T>(`${this.appUrl}/${url}`, {headers: this.reqOptions})
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  //  private handlerError(error: HttpErrorResponse){
  //    let message = '';
  //    if(error.error instanceof ErrorEvent){
  //      // 클라이언트 측의 에러
  //      console.error(`Client-side error: ${error.error.message}`);
  //      message = error.error.message;
  //    } else{
  //      // 백엔드 측의 에러
  //      console.log(`Server-side error: ${error}`);
  //      message = error.message;
  //    }
  //    // 사용자에게 전달할 메시지를 담은 옵저버블 반환
  //    return throwError({
  //      title: 'Something wrong! please try agin later.',
  //      message
  //    });
  //  }

  // private handleError<T> (result?: T) {
  //   return (error: any): Observable<T> => {
 
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
 
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }


}
