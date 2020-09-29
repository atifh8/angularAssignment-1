import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IUsers } from '../user.modal';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((responseData) => {
        return responseData;
      })
    );

    // .subscribe((users) => {
    //   console.log(users);
    // });
  }

  //   private handleError(err: HttpErrorResponse) {
  //     let errorMessage = '';
  //     if (err.error instanceof ErrorEvent) {
  //       errorMessage = `An error occurred: ${err.error.message}`;
  //     } else {
  //       errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  //     }
  //     console.error(errorMessage);
  //     return throwError(errorMessage);
  //   }
}
