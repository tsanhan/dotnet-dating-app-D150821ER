import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';



@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    if(this.members.length > 0) return of(this.members);
    return this.http.get<Member[]>(`${this.baseUrl}users`).pipe(tap(members => this.members = members));
  }

  getMember(username: string): Observable<Member> {
    const member = this.members.find(x => x.userName === username);
    if(member !== undefined) return of(member);

    return this.http.get<Member>(`${this.baseUrl}users/${username}`).pipe(tap(member => this.members.push(member)));
  }

  updateMember(member: Member) {
    return this.http.put(`${this.baseUrl}users`, member).pipe(tap(() => {
      const index = this.members.indexOf(member);
      this.members[index] = member;
    }));
  }
}
