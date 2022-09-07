import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Input() usersFromHomeComponent: any;

  constructor() { }

  ngOnInit(): void {
  }

  register(form:any) {
    console.log(this.model);
  }

  cancel() {
    console.log('cancelled');
  }

}
