import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; 
import { User } from '../../models/user';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  
  user: User = new User();

  constructor( 
    private apiService: ApiService,
    private http: HttpClient
    ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.apiService.getUser().subscribe((data) => {
      this.user = data;
    })
  }

  onLogout() {
   console.log("trying to logout");
   this.apiService.logout();
  }

}
