import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDetailComponent } from '../members/member-detail/member-detail.component';
import { MemberListComponent } from '../members/member-list/member-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component: MemberListComponent, pathMatch: 'full'},
  {path:':id',component: MemberDetailComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MemberDetailComponent,
    MemberListComponent
  ],
  exports: [
    MemberDetailComponent,
    MemberListComponent,
    RouterModule
  ]
})
export class MembersModule { }
