import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit{

  httpdata: any;

  constructor(public myservice:MyserviceService, private http: HttpClient) {}
  
  ngOnInit(): void {
    this.myservice.resources("photos");
  }

}
