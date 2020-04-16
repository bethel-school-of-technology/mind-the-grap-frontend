import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';
import { User } from '../../models/user';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  profileEdit: FormGroup;
  users:  User[];
  model: User = new User();

  @Input() dataPath: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Your updated information : ', this.model);
    console.log(this.model );
    this.apiService.updateUser(this.model).subscribe((res: Response) => { this.router.navigate(['/profile']);
      });
     }

};
