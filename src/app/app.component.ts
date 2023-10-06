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
  
  phones!:any;

  done(phone:number,index:number,){
    let i = 0;
    for(let element of this.phones[index].phoneCalls) {
      if(element.phone == phone) { 
        this.phones[index].phoneCalls[i].done = !this.phones[index].phoneCalls[i].done;
        
      }
      i++;
      
    }
    console.log(this.phones)
  }
 
  toggleCollapse(i: number) {
    if(this.show == i){ this.show =-1; }
    else{ this.show = i; }
  }

  getData(){  
    this.http.get('http://127.0.0.1:5000')
    .subscribe((data:any) => { 
      this.phones= data.data
      console.log(data.data)
    })
  }

  postData(table: string, id: number){  
    this.http.post('http://127.0.0.1:5000/secret',{"Table":table,"ID":id})
    .subscribe((data:any) => { 
      console.log(data)
    })
  }
  
}




