import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Phone } from './phone';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PhoneService {

  private phonesUrl = 'api/phones';  // URL to web api

  constructor(
    private http: HttpClient, private messageService: MessageService ) { }


  getPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.phonesUrl)
      .pipe(
        tap(_ => this.log('fetched phones')),
        catchError(this.handleError<Phone[]>('getPhones', []))
      );
  }

  getPhone(id: number): Observable<Phone> {
    const url = `${this.phonesUrl}/${id}`;
    return this.http.get<Phone>(url).pipe(
      tap(_ => this.log(`fetched phone id=${id}`)),
      catchError(this.handleError<Phone>(`getPhone id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`PhoneService: ${message}`);
  }

  updatePhone (phone: Phone): Observable<any> {
    return this.http.put(this.phonesUrl, phone, httpOptions).pipe(
      tap(_ => this.log(`updated phone id=${phone.id}`)),
      catchError(this.handleError<any>('updatePhone'))
    );
  }

  addHero (phone: Phone): Observable<Phone> {
    return this.http.post<Phone>(this.phonesUrl, phone, httpOptions).pipe(
      tap((newPhone: Phone) => this.log(`added phone w/ id=${newPhone.id}`)),
      catchError(this.handleError<Phone>('addPhone'))
    );
  }

  deletePhone (phone: Phone | number): Observable<Phone> {
    const id = typeof phone === 'number' ? phone : phone.id;
    const url = `${this.phonesUrl}/${id}`;

    return this.http.delete<Phone>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted phone id=${id}`)),
      catchError(this.handleError<Phone>('deletePhone'))
    );
  }

  searchPhones(term: string): Observable<Phone[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Phone[]>(`${this.phonesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found phones matching "${term}"`)),
      catchError(this.handleError<Phone[]>('searchPhones', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
