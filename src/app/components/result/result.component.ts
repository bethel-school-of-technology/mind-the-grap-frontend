import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../service/result.service';
import { Response } from '../../models/response';
import { Question } from '../../models/question';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { Render3ParseResult } from '@angular/compiler/src/render3/r3_template_transform';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  displayElement1 = false;
  
 results: any;

  constructor(
    private route: ActivatedRoute,
    private resultService: ResultService,
    private http: HttpClient,
  ) { }

  getResults(){
    this.resultService.getResults().subscribe((data) => {
      this.results = data;
    })
  }

  ngOnInit(){
    this.getResults();
  }

}
