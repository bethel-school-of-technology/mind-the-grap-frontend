import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  model: User = new User();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('Update Successful: ', this.model);
}

};
