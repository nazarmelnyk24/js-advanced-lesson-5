import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  
  public login!: string;
  public password!: string;
  public email!: string;
  public userList: User[] = [];
  public editStatus = false;
  public userIndex!:number;

  constructor() { }

  ngOnInit(): void {
  }

  addUser() {
    const newUser = new User(this.login, this.password, this.email);
    this.userList = [...this.userList, newUser];
    this.clearFields();
  }

  deleteUser(i: number) {
    this.userList.splice(i, 1);
  }

  editUser(i: number) {
    const user = this.userList[i];
    this.login = user.login;
    this.password = user.password;
    this.email = user.email;
    this.editStatus = true;
    this.userIndex = i;
  }

  saveEditUser() {
    const newUser = new User(this.login, this.password, this.email);
    this.userList[this.userIndex] = newUser;
    this.editStatus = false;
    this.clearFields();
  }

  clearFields() {
    this.login = '';
    this.password = '';
    this.email = '';
  }

}

class User {
  constructor(public login: string, public password: string, public email: string) {
    this.login = login;
    this.password = password;
    this.email = email;
  }
}
