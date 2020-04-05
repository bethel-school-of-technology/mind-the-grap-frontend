import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { Response } from '../../models/response';
import { Assessment } from '../../models/assessment';
import { AssessmentService } from 'src/app/service/assessment.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
  providers: [AdminService, AssessmentService]
})

export class AdminViewComponent implements OnInit {
  
  public assessments: any;
  public responses: any;
  public questions: any;
  
  

  constructor(
    private route: ActivatedRoute,
    private location: Location, 
    private http: HttpClient, 
    private adminService: AdminService,
    private assessmentService: AssessmentService
  ) { }

  ngOnInit() {
  this.getResponse();
  this.getAssessments();
  this.getQuestions();
  }


  getQuestions(){
    const assessment_id = this.route.snapshot.paramMap.get('assessment_id');
    this.adminService.getQuestions(assessment_id).subscribe((data) => {
      console.log(data);
      this.questions = data;
    })
  }

  getAssessments(){
    this.assessmentService.getAssessments().subscribe((data) => {
      this.assessments = data;
    })
  }

  getResponse(){
    const question_id = this.route.snapshot.paramMap.get('question_id');
    this.adminService.getResponse(question_id).subscribe((data) => {
      console.log(data);
      this.responses = data;
    })
  }

}
