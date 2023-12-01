import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getData();
  }
  constructor(private http: HttpClient) {}
  title = 'Angularv2';
  isCollapsed = [false,false,false];
  show = -1;
  phones!:any;
  url = "http://127.0.0.1:5000";
  visible = false;
  usernameInput :any;
  passwordInput :any;
  loginButton(){
    this.usernameInput = (document.getElementById('username') as HTMLInputElement).value;
    this.passwordInput = (document.getElementById('password') as HTMLInputElement).value;
    console.log(this.usernameInput);
    console.log(this.passwordInput);
  }
  toggleCollapse2(): void {
    this.visible = !this.visible;
  }
  toggleCollapse(i:number): void {
    this.isCollapsed = [false,false,false];
    this.isCollapsed[i] = true;
  }
  getData(){
    this.http.get(this.url +"/getData")
    .subscribe((data:any) => {
      this.phones= data.data;
    })
  }

  markDone(id: number){
    this.http.post(this.url +"/markDone",{"ID":id})
    .subscribe(() => {
      this.getData();
    })
  }
  resetData(){
    this.http.get(this.url+'/reset')
    .subscribe(() => {
      this.getData();
    })
  }
}