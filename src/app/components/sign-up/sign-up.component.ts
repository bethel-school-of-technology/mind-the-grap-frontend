import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { NgModule } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpform: FormGroup;
  users:  User[];
  @Input() dataPath: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
    ) {}

  ngOnInit()  {
    /*this.http.get<User[]>(this.dataPath).subscribe(
      users=> {
        this.users = users;
      });*/
  }
//added console log for User 03.08.20//
onSubmit() {
  const userData = this.signUpform.value;
  console.log('Your form data : ', this.signUpform.value );
  this.apiService.createUser(userData).subscribe((res: Response) => { this.router.navigate(['']);

  });
}

};

