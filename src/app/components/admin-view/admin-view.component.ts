import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { Response } from '../../models/response';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
  providers: [AdminService]
})

export class AdminViewComponent implements OnInit {
  
  public responses: any;
  
  

  constructor(
    private route: ActivatedRoute,
    private location: Location, 
    private http: HttpClient, 
    private adminService: AdminService
  ) { }

  ngOnInit() {
  this.getResponse();
  }

  getResponse(){
    const question_id = this.route.snapshot.paramMap.get('question_id');
    this.adminService.getResponse("5e7e92e0a5174426c4137803").subscribe((data) => {
      console.log(data);
      this.responses = data;
    })
  }

}
