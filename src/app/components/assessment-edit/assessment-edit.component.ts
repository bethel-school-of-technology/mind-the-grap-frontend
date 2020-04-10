import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AssessmentService } from 'src/app/service/assessment.service';
import { QuestionService } from 'src/app/service/question.service';
import { ResponseService} from 'src/app/service/response.service';
import { Assessment } from 'src/app/models/assessment';
import { Question } from 'src/app/models/question';
import { Router } from '@angular/router';

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
    private questionService: QuestionService,
    private responseService: ResponseService,
    private router: Router
    ) {}

  ngOnInit() {
    this.getAssessment();
  }

  getAssessment(){
    const title = this.route.snapshot.paramMap.get('title');
    this.assessmentService.getAssessment(title).subscribe((data) => {
      console.log("Assessment:");
      console.log(data);
      console.log(data._id);
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

  onSubmit(f) {
    console.log("Form Data:")
    console.log(f.value);
    /* 
      I need to ensure the answer values are tied correctly to their question ids
      user_id is a placeholder for work Taylor is doing
      redirect should go to a results page once it is built
    */
    this.responseService.createResponses(f.value, this.questions, this.assessment._id, "123456789").subscribe((res: Response) => { this.router.navigate(['/dashboard']);})
  }
}
