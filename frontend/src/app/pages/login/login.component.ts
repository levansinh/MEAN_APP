import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  responseData: any = [];
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private authService: AuthService,
    private router: Router,
    private toasrt: ToastrService
  ) {}

  onSubmit() {
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;
    const newData = { username: username, password: password };

    this.authService.loginUser(newData).subscribe((data: any): void => {
      console.log(data);
      if (data != null) {
        this.responseData = data;
        localStorage.setItem('token', data.token);
        localStorage.setItem('userCurrent',JSON.stringify(data.user))
        this.router.navigate(['/']);
        this.toasrt.success('Login success', 'Success!');
      }
    });
  }
  ngOnInit(): void {}
}
