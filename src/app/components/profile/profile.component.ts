import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  model: User = new User();

  //private sub: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) { }

  // ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //    this._id = +params['_id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
  //   });
  // }

  // old logic for getUser
  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.apiService.getUser().subscribe((data) => {
      this.model = data;
    })
  }
}
