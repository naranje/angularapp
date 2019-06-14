import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer } from '../../shared/interfaces/icustomer';
import { IClue } from '../../shared/interfaces/iclue';
import { IPagedResults } from 'src/app/shared/interfaces/ipaged-results';
import { ICategory } from 'src/app/shared/interfaces/icategory';

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

  getRandomClue() : Observable<IClue>{
    return this.http.get<IClue[]>(this.randomBaseUrl)
    .pipe(
      map(clues => {return clues[0];}), catchError(this.handleError)
    );
  }

  getCategoriesPage(page: number, pageSize: number): Observable<IPagedResults<ICategory[]>> {
    return this.http.get<ICategory[]>(`${this.categoriesBaseUrl}??count=${pageSize}&offset=${page*pageSize}`,{observe: 'response'})
      .pipe(
        map(res => {
          const totalRecords = +res.headers.get('X-InlineCount');
          const categories = res.body as ICategory[];
          return {
            results: categories,
            totalRecords: totalRecords
          };
        }),
        catchError(this.handleError)
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

