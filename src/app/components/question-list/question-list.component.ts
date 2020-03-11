import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
  }

  //this code wont work unitl backend is working
  // getQuestion() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   console.log("id:" + id);
  //   this.http.get(this.questionsRoute + '/' + id).subscribe(question => {
  //     this.model = question as Question;
  //     console.log('Question', this.model);
  //   })
  // }

  goBack() {
    this.location.back();
  }
}
