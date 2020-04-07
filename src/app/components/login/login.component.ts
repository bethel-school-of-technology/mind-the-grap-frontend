import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ApiService } from '../../service/api.service';
import { UserService } from '../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false; 
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  ) {
    //redirect to home if already logged in 
    // once we have profile/:id working this should be profile page
    if (this.apiService.currentUserValue) {
      this.router.navigate(['/'])
    }
  }

ngOnInit(){
  this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

// getter for form fields
get f() { return this.loginForm.controls;}

  onSubmit() {
    this.submitted = true;

    // stop here is form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.apiService.logInUser(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
        this.loading = false;
      });
  }
};