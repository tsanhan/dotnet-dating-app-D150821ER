import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
  ],
  declarations: [],
  exports: [
    TabsModule
  ]
})
export class SharedModule { }
