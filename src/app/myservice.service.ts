import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  userId: any = '';
  input: any;

  // searchparam:any;
  httpdata: any;

  constructor(public http : HttpClient) { }

  // getinput(){
  //   return this.input;
  // }

  setinput(value:any){
    this.userId = value.target.value;
    console.log(this.userId);
    
  }

  resources(res:any){
    this.http.get("https://jsonplaceholder.typicode.com/"+res+"/"+this.userId).subscribe((data: any) =>{
          console.log(data); 
          this.displaydata(data);
          });
  }

  displaydata(data: any) {
    if( this.userId == ''){
      this.httpdata = data;
    }
    else{
      this.httpdata = [data]
    }
    
    console.log(this.httpdata);
  }

   
}
