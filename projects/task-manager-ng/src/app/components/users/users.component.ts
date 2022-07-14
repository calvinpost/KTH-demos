import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.enum';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userSer: UserService) { }

  ngOnInit(): void {
    // let user1 = new User(1, 'kev', '', Role.ADMIN);
    // let user2 = new User(2, 'Mike', '', Role.BASIC_USER);
    // let user3 = new User(3, 'Nestor', '', Role.BASIC_USER);
    // let user4 = new User(4, 'Derek', '', Role.BASIC_USER);
    // this.users = [user1, user2, user3, user4];

    this.getUsers();
  }

  getUsers(){
    this.userSer.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      err => {
        console.log(err);
      }
    );
  }
}
