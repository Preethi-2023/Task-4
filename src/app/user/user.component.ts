import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  constructor(public myservice:MyserviceService, private http: HttpClient) {}
  
  ngOnInit(): void {
    this.myservice.resources("users");
  }
}
