import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  register(form:any) {
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
