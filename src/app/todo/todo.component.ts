import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  httpdata: any;

  constructor(public myservice:MyserviceService, private http: HttpClient) {}
  
  ngOnInit(): void {

    this.myservice.resources("todos");
  }
      

}
