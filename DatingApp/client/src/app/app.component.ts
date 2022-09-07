import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // change detection in angular is done by the angular framework.
  // it checks if the data has changed and if so it rerenders the component.
  title: string = 'The Dating app';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService) {

  }

  ngOnInit(): void {
    // this.getUsers();
    this.setCurrentUser();
  }


  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(
      {
        next: response => {
          this.users = response;
        }, // what to do with returned data
        error: error => {console.log(error);}, // what to do with error
        complete: () => {console.log('Finished');} // what to do when finished
      }
    )
  }

  setCurrentUser() {
    const userFromLS = localStorage.getItem('user');
    const user: User = userFromLS ? JSON.parse(userFromLS) : null;
    this.accountService.setCurrentUser(user);
  }

}
