import { Component, OnInit } from '@angular/core';
import { Response } from '../../models/response';
import { Question } from '../../models/question';
import { User } from '../../models/user';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  displayElement1 = false;
  

  constructor() { }

  ngOnInit(): void {
  }

}
