import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NgModule } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MustMatch } from '../../helpers/must-match.validator';
//import { AuthenticationService, TokenPayload } from '../authentication.service'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpform: FormGroup;
  submitted = false;
  users:  User[];
  @Input() dataPath: string;

  model: User = new User()

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit()  {
    this.signUpform = this.formBuilder.group({
      first_Name: ['', Validators.required],
      last_Name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });  }

  get f() { return this.signUpform.controls; }  

onSubmit() {
  
  this.submitted = true;

  // stop here if form is invalid
  if (this.signUpform.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUpform.value, null, 4));
   
  console.log('Your form data : ', this.signUpform );
  this.apiService.createUser(this.model).subscribe((res: Response) => { this.router.navigate(['/dashboard']);
    });
   }
};

