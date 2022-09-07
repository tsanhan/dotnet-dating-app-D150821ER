import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from '../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$?: Observable<User>;

  constructor(private accountService: AccountService) {
    this.currentUser$ = this.accountService.currentUser$;
  }

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model) // returning observable (it's lazy)
      .subscribe({
        next: response => {
          console.log(response);
        },
        error: error => {
          console.log(error);
        }

      });
  }

  logout() {
    this.accountService.logout();
  }

}
