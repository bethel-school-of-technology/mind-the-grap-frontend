import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor( 
    private apiService: ApiService,
    private http: HttpClient
    ) {}

  ngOnInit() {

  }

  onLogout() {
   console.log("trying to logout");
   this.apiService.logout();
  }

}
