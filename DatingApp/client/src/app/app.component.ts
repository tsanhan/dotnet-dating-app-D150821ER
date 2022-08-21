import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'The Dating app';
  users:any;
  constructor(private http: HttpClient){
    
  }
  ngOnInit():void{
   this.getUser();
  }
  getUser(){
   this.http.get("https://localhost:5001/api/users").subscribe(
    // response=>{
    //   this.users=response;
    // },
    // error=>{
    //   console.log(error);
      
    // },
    // ()=>{
    //   console.log('Finished');
      
    // }
    {
      next:(response)=>{this.users=response;console.log(response);
      },
      error:(error)=>{console.log(error);},
      complete:()=>{console.log('Finished');}
    }
   )
  }
}
