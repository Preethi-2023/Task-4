import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  

  constructor(
    public myservice:MyserviceService, 
    private http: HttpClient
    ) {}
  
  ngOnInit(): void {
  
     this.myservice.resources("posts");
     //console.log(this.myservice.httpdata);
     
    }

      









}
