import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IClue } from '../../shared/interfaces/iclue';
import { ICategory } from 'src/app/shared/interfaces/icategory';

@Injectable()
export class DataService {

  cluesBaseUrl = 'http://jservice.io/api/clues';
  randomBaseUrl = 'http://jservice.io/api/random';
  categoriesBaseUrl = 'http://jservice.io/api/categories';

  constructor(private http: HttpClient) { }

  getClues(minDate: Date, maxDate: Date): Observable<IClue[]> {
    return this.http.get<IClue[]>(`${this.cluesBaseUrl}?min_date="${minDate.toISOString()}"&max_date="${maxDate.toISOString()}"`)
      .pipe(
        map(clues => { return clues; }), catchError(this.handleError)
      );
  }

  getRandomClue(): Observable<IClue> {
    return this.http.get<IClue[]>(this.randomBaseUrl)
      .pipe(
        map(clues => { return clues[0]; }), catchError(this.handleError)
      );
  }

  getCategoriesPage(page: number, pageSize: number): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.categoriesBaseUrl}?count=${pageSize}&offset=${page * pageSize}`)
      .pipe(
        map(res => {
          return res as ICategory[];
        }),
        catchError(this.handleError)
      );
  }

  getCategoryClues(categoryId: number) {
    return this.http.get<IClue[]>(`${this.cluesBaseUrl}?category=${categoryId}`)
      .pipe(map(clues => { return clues; }), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Backend server error');
  }
}

