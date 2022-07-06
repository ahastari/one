import { Component, OnInit } from '@angular/core';
import { User, UserResult } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users: User[] = [];

  constructor(private service: UsersService) {
    this.getUsers();
   }

  ngOnInit(): void {
  }

  getUsers() : void {
    this.service.getUsers().subscribe((result: UserResult) => {
      console.log(result.data);
      this.users = result.data;
    });
  }

}
