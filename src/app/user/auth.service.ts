import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { IUser } from './user.model';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  loginUser(userName: string, password: string) {
    const loginInfo = {
      username: userName,
      password: password
    };
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(`/api/login`, loginInfo, options)
      .pipe(
        tap(data => {
          this.currentUser = <IUser>data['user'];
        }),
        catchError(err => {
          return of(false);
        })
      );
    // this.currentUser = {
    //   id: 1,
    //   userName: userName,
    //   firstName: 'Kleavant',
    //   lastName: 'James'
    // };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get(`/api/currentIdentity`)
      .pipe(
        tap(data => {
          if (data instanceof Object) {
            this.currentUser = <IUser>data;
          }
        })
      )
      .subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string): Observable<IUser> {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put<IUser>(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  userLogout() {
    this.currentUser = undefined;

    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(`/api/logout`, {}, options);
  }
}
