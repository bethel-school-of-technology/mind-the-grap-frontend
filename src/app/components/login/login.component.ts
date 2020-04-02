import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login = new Login();
  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

ngOnInit(){
  
}

  onSubmit() {
    console.log('Submit Successful: ', this.model);
    this.apiService.logInUser(this.model).subscribe((res: Response) => { this.router.navigate(['/dashboard']);

})

  }
}