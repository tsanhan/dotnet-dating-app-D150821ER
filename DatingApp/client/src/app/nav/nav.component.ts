import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn: boolean = false;
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login() {
    this.accountService.login(this.model) // returning observable (it's lazy)
      .subscribe({
        next: response => {
          console.log(response);
          this.loggedIn = true;
        },
        error: error => {
          console.log(error);
        }

      });
  }

  logout() {
    this.accountService.logout();
    this.loggedIn = false;
  }

  // get the current user
  getCurrentUser() {
    this.accountService.currentUser$.subscribe(
      {
        next: user => {
          this.loggedIn = !!user;
        },
        error: error => {
          console.log(error);
        }
      });
  }

}
