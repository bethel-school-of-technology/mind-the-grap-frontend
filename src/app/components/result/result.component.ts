import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../service/result.service';
import { Response } from '../../models/response';
import { Question } from '../../models/question';
import { User } from '../../models/user';
import { ApiService } from '../../service/api.service';
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

  results: String;

  constructor(
    private route: ActivatedRoute,
    private resultService: ResultService,
    private apiService: ApiService,
    private http: HttpClient,
  ) { }



  getResults(assessment_id) {
    var user_id = this.apiService.getUserId();
    this.resultService.getResults(assessment_id, user_id).subscribe((data) => {
      this.results = data;
    })
  }
  displayResult() {
    var bucket_response = this.getResults
    var item_elements = document.querySelectorAll(".item");
  
        
        if (bucket_response == "Bucket One") {
          document.querySelector("." + bucket_response).style.display = "block";
        } else if (bucket_response == "Bucket Two") {
          document.querySelector("." + bucket_response).style.display = "block";
        } else if (bucket_response == "Bucket Three") {
          document.querySelector("." + bucket_response).style.display = "block";
        } else if (bucket_response == "Bucket Four") {
          document.querySelector("." + bucket_response).style.display = "block";
        } else {
          console.log("");
        }
      });
    }
  }


  ngOnInit() {
    this.getResults('5e7ac57f79068f306068ab63');
  }

}
