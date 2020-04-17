import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';
import { User } from '../../models/user';
import { FormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  profileEdit: FormGroup;
  users:  User[];
  model: User = new User();

  @Input() dataPath: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.apiService.getUser().subscribe((data) => {
      this.model = data;
    })
  }

  onSubmit(f) {
    // console.log('Your updated information: ');
    // console.log(f.value);
    this.apiService.updateUser(f.value).subscribe((res: Response) => { 
      // console.log("Got Here:");
      // console.log(this.model._id);  
      this.router.navigate(['/profile/'+ this.model._id]);
      });
     }
};
