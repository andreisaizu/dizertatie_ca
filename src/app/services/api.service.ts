import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, share, timeout, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url = "http://localhost:8090";

  constructor(
    private http: HttpClient
  ) {
  }

  private formatErrors(error: any) {
    return throwError(error);
  }

  private formatBlobErrors(err: HttpErrorResponse): Observable<any> {
    const reader: FileReader = new FileReader();

    const obs = Observable.create((observer: any) => {
      reader.onloadend = (e) => {
        observer.error(JSON.parse(reader.result.toString()));
        observer.complete();
      }
    });
    reader.readAsText(err.error);
    return obs;
  }

  getUrl(path: string): string {
    return `${this.api_url}${path}`;
  }

  getAny(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  getAny2(path: string, options: any): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, options)
      .pipe(catchError(this.formatErrors));
  }

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', sessionStorage.getItem("username"));

    return this.http.get<T>(`${this.api_url}${path}`, {headers, params })
      .pipe(catchError(this.formatErrors));
  }

  // getOrRedirect<T>(path: string, redirectPath: string, params: HttpParams = new HttpParams()): Observable<T> {
  //   return this.http.get<T>(`${this.api_url}${path}`, { params })
  //     .pipe(catchError((err, caught): Observable<T> => {
  //       if(err.status === 403){                 //forbidden
  //         this.router.navigateByUrl(newUrl);
  //       }
  //       return of(null);
  //     }));
  // }

  getBlob(path: string): Observable<any> {
    return this.http.get<Blob>(`${this.api_url}${path}`, { responseType: 'blob' as 'json' })
      .pipe(catchError(this.formatBlobErrors));
  }

  getBlobByPostWithObject(path: string, body: Object = {}): Observable<any> {
    return this.http.post<Blob>(`${this.api_url}${path}`, body, { responseType: 'blob' as 'json' })
      .pipe(catchError(this.formatBlobErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', sessionStorage.getItem("username"));

    return this.http.put(
      `${this.api_url}${path}`,
      body, {headers}
    ).pipe(catchError(this.formatErrors));
  }

  putAsString(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${this.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  putWithOptions(path: string, body: Object = {}, options: any): Observable<any> {
    return this.http.put(`${this.api_url}${path}`, body, options).pipe(catchError(this.formatErrors));
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this.http.patch(
      `${this.api_url}${path}`,
      body
    ).pipe(catchError(this.formatErrors));
  }

  patchAsString(path: string, body: Object = {}): Observable<any> {
    return this.http.patch(
      `${this.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  patchWithOptions(path: string, body: Object = {}, options: any): Observable<any> {
    return this.http
      .patch(`${this.api_url}${path}`, body, options)
      .pipe(catchError(this.formatErrors))
      .pipe(share());
  }

  patchWithOptionsAndTimeout(
    path: string,
    body: Object = {},
    options: any,
    timeoutValMilisecs: number
  ): Observable<any> {
    return this.http
      .patch(`${this.api_url}${path}`, body, options)
      .pipe(timeout(timeoutValMilisecs))
      .pipe(catchError(this.formatErrors))
      .pipe(share());
  }

  postAsString(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${this.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any): Observable<any> {
    let url = `${this.api_url}${path}`;
    return this.http.post(
      url,
      body
    );
    // return this.http.post(
    //   url,
    //   body
    // ).pipe(catchError(this.formatErrors)).pipe(share());
  }

  postWithOptions(path: string, data: any, options: any): Observable<any> {
    return this.http
      .post(`${this.api_url}${path}`, data, options)
      .pipe(catchError(this.formatErrors))
      .pipe(share());
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${this.api_url}${path}`
    ).pipe(catchError(this.formatErrors));
  }

  deleteWithOptions(path: string, options: any): Observable<any> {
    return this.http.delete(`${this.api_url}${path}`, options).pipe(catchError(this.formatErrors)).pipe(share());
  }
}
