import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AssessmentService } from 'src/app/service/assessment.service';
import { Assessment } from 'src/app/models/assessment';

@Component({
  selector: 'app-assessment-edit',
  templateUrl: './assessment-edit.component.html',
  styleUrls: ['./assessment-edit.component.css']
})
export class AssessmentEditComponent implements OnInit {

  public assessment: Assessment = new Assessment();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private assessmentService: AssessmentService
    ) {}

  ngOnInit() {
    this.getAssessment();
  }

  getAssessment(){
    const title = this.route.snapshot.paramMap.get('title');
    this.assessmentService.getAssessment(title).subscribe((data) => {
      console.log(data);
      this.assessment = data;
    })
  }

}
