import { Component, OnInit } from '@angular/core';
import { user } from '../models/user/user.model';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: user;
  users: user[];
  receber: any;
  constructor(private service: UserService) { }

  async ngOnInit() {
    this.receber = await this.service.Get();
    this.users = this.receber;
  }

}
