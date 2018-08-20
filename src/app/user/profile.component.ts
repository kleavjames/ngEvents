import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { IUser } from './user.model';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    .error-info { float: right; color: #ec5757; font-size: 14px; margin-top: 2px; }
    .error input { background-color: #e3c3c5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(userData: IUser) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(userData.firstName, userData.lastName)
        .subscribe(() => {
          this.toastr.success('Profile saved.');
          this.router.navigate(['/events']);
        });
    } else {
      this.toastr.error('Failed to update profile.');
    }
  }

  logout() {
    this.authService.userLogout()
      .subscribe(() => {
        this.toastr.success('Logout successfully');
        this.router.navigate(['/user/login']);
      });
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
