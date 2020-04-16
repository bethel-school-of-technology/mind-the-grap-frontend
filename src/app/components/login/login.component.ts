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
  //logIn property is tracking the value of FormGroup called in login.HTML
  logIn: FormGroup;

  model: Login = new Login();

  constructor(
    private apiService: ApiService,
    private router: Router,
    private http: HttpClient,
  ) {}

ngOnInit(){
  
}
// onSubmit method is allowing the user to log in + calling the router to naviage user to dashboard
//logInUser found in api.service
  onSubmit() {
    //console.log('Submit Successful: ', this.model);
    this.apiService.logInUser(this.model).subscribe((res: Response) => { this.router.navigate(['/dashboard']);
    console.log(res);
    });
  }
};