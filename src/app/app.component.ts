import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    this.getData()
  }
  constructor(private http: HttpClient) {}
  title = 'Test';
  isCollapsed = [false,false,false];
  show = -1;
  
  phonesNEW!:any;

  done(phone:number,index:number,){
    let i = 0;
    for(let element of this.phonesNEW[index].phoneCalls) {
      if(element.phone == phone) { 
        this.phonesNEW[index].phoneCalls[i].done = !this.phonesNEW[index].phoneCalls[i].done;
        
      }
      i++;
      
    }
    console.log(this.phonesNEW)
  }
 
  toggleCollapse(i: number) {
    if(this.show == i){ this.show =-1; }
    else{ this.show = i; }
  }

  getData(){  
    this.http.get('http://127.0.0.1:5000')
    .subscribe((data:any) => { 
      this.phonesNEW= data.data
      console.log(data.data)
    })
  }
}




