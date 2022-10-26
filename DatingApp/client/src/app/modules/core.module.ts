import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [],
  exports: [
    BsDropdownModule,
    ToastrModule
  ]
})
export class CoreModule { }
