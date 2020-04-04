import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logIn: FormGroup;

  model: Login = new Login();

  constructor(
    private apiService: ApiService,
    private router: Router,
    private http: HttpClient,
  ) {}

ngOnInit(){
  
}

  onSubmit() {
    console.log('Submit Successful: ', this.model);
    this.apiService.logInUser(this.model).subscribe((res: Response) => { this.router.navigate(['/dashboard']);

    });
  }
};