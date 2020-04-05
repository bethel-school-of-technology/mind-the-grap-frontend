import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AssessmentService } from 'src/app/service/assessment.service';
import { QuestionService } from 'src/app/service/question.service';
import { Assessment } from 'src/app/models/assessment';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-assessment-edit',
  templateUrl: './assessment-edit.component.html',
  styleUrls: ['./assessment-edit.component.css']
})
export class AssessmentEditComponent implements OnInit {

  public assessment: Assessment = new Assessment();
  public questions: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private assessmentService: AssessmentService,
    private questionService: QuestionService
    ) {}

  ngOnInit() {
    this.getAssessment();
  }

  getAssessment(){
    const title = this.route.snapshot.paramMap.get('title');
    this.assessmentService.getAssessment(title).subscribe((data) => {
      console.log("Assessment:");
      console.log(data);
      this.assessment = data;
      this.getQuestions(data._id);
    })
  }

  getQuestions(assessment_id){
    this.questionService.getQuestions(assessment_id).subscribe((question_data) => {
      console.log("Questions:");
      console.log(question_data);
      this.questions = question_data;
    })
  }

  onSubmit() {
    console.log('Submit Successful: ', this);
    // this.apiService.logInUser(this.model).subscribe((res: Response) => { this.router.navigate(['/dashboard']);
  }
}
