import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private cookieService: CookieService,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;
    const newData = { username: username, password: password };
    this.authService.loginUser(newData).subscribe((data: any): void => {
      console.log(data);

      this.cookieService.set('token', data.token, { expires: 1 });
      this.router.navigate(['/']);
    });
  }
  ngOnInit(): void {}
}
