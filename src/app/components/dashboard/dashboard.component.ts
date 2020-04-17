import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AssessmentService } from 'src/app/service/assessment.service';
import { Assessment } from 'src/app/models/assessment';
import { ResultComponent } from '../result/result.component';
import { ResultService } from 'src/app/service/result.service';
import { ResponseService } from 'src/app/service/response.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  result: String;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private assessmentService: AssessmentService,
    private resultService: ResultService,
    private responseService: ResponseService
    ){}

  ngOnInit() {
    this.getResult();
  }

  getResult(){
    this.responseService.getResponse().subscribe((data) => {
      if (data != "No Assessment Taken") {
        var assessment_id = data.assessment_id;
        var user_id = data.user_id;
        this.resultService.getResults(assessment_id, user_id).subscribe((result) => {
          if (result != "No Assessment Taken") {
            console.log("result:");
            console.log(result);
            this.result = "Bucket Four";
           // result;
            // this.result = "Assessment Not Taken";
          }
        });
      } else {
        this.result = "No Assessment Taken";
      }  
    })
  }

}
