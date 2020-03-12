import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: User = new User();

  constructor() { }

  ngOnInit(): void {
  }
//added console log for User 03.08.20//
  onSubmit() {
    console.log('Submit Successful: ', this.model);
}

}
