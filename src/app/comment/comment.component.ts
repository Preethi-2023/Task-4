import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(public myservice:MyserviceService, private http: HttpClient) {}
  
  ngOnInit(): void {
    this.myservice.resources("comments");
  }
}
