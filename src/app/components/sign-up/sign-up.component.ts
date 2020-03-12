import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD:src/app/sign-up/sign-up.component.ts
import { User } from '../models/user';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
=======
import { User } from '../../models/user';
>>>>>>> master:src/app/components/sign-up/sign-up.component.ts


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
