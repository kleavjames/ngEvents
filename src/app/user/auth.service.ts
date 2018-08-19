import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor(private toastr: ToastrService) {}

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Kleavant',
      lastName: 'James'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    this.toastr.success('Profile updated successfully.');
  }

}
