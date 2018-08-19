import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    .error-info { float: right; color: #ec5757; font-size: 14px; margin-top: 2px; }
  `]
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverLogin: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() { }

  login(data) {
    this.authService.loginUser(data.userName, data.password);
    this.toastr.success('Successfully logged in.');
    this.router.navigate(['/events']);
  }

  cancel() {
    this.toastr.info('Cancelled logged in.');
    this.router.navigate(['/events']);
  }
}
