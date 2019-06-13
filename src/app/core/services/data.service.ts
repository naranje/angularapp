import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer } from '../../shared/interfaces/icustomer';
import { IClue } from '../../shared/interfaces/iclue';

@Injectable()
export class DataService {

  customerBaseUrl = 'https://472bae54-459b-42e4-b644-e5dd57c9ee01.mock.pstmn.io/api/customers';
  // cluesBaseUrl = 'http://jservice.io/api/clues?';
  cluesBaseUrl = 'http://jservice.io/api/clues?min_date="2014-02-01"&max_date="2014-02-03"';
  randomBaseUrl = 'http://jservice.io/api/random';
  categoriesBaseUrl = 'http://jservice.io/api/categories';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.customerBaseUrl)
      .pipe(
        map(customers => {return customers;}),catchError(this.handleError)
      );
  }

  //TODO: Pass dates as parameters
  getClues() : Observable<IClue[]>{
    return this.http.get<IClue[]>(this.cluesBaseUrl)
    .pipe(
      map(clues => {return clues;}), catchError(this.handleError)
    ); 
  }

  private handleError(error: HttpErrorResponse){
    console.error('server error:', error);
    if (error.error instanceof Error){
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Backend server error');
  }
}

