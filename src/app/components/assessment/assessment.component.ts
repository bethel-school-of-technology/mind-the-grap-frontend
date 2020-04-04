import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AssessmentService } from 'src/app/service/assessment.service';
import { Assessment } from 'src/app/models/assessment';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})

export class AssessmentComponent implements OnInit {
  // public model: Assessment = new Assessment();

  assessments: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private assessmentService: AssessmentService
    ){}

  ngOnInit() {
    this.getAssessments();
  }

  getAssessments(){
    this.assessmentService.getAssessments().subscribe((data) => {
      this.assessments = data;
    })
  }
}
