import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getData()
  }
  constructor(private http: HttpClient) {}
  title = 'Test';
  isCollapsed = [false,false,false];
  show = -1
  phones!:any;
 
  toggleCollapse(i: number) {
    if(this.show == i) { this.show =-1; }
    else{this.show = i;}
  }

  getData(){
    this.http.get('http://127.0.0.1:5000')
    .subscribe((data:any) => {
      this.phones= data.data
    })
  }

  postData(table: string,data: boolean,id: number){
    this.http.post('http://127.0.0.1:5000/secret',{"Table":table,"Data":data,"ID":id})
    .subscribe(() => {
      this.getData()
    })
  }
}