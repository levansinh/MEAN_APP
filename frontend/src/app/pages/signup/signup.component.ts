import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {}
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    const username = this.registerForm.controls.username.value;
    const password = this.registerForm.controls.password.value;
    const email = this.registerForm.controls.email.value;
    const phone = this.registerForm.controls.phone.value;
    const address = this.registerForm.controls.address.value;
    const newData = {
      username: username,
      password: password,
      email: email,
      phone: phone,
      address: address,
    };

    this.authService.registerUser(newData).subscribe((data) => {
      this.toastr.success("Account you registered successfully")
      this.router.navigate(['/login']);
    });
  }
}
