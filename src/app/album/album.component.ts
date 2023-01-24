import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  httpdata: any;
  // searchparam='';
  // input: any;
  // value: any;

  constructor(
    public myservice:MyserviceService, 
    private http: HttpClient) {}

    
  ngOnInit(): void {
    this.httpdata = this.myservice.resources("albums");

}
}
        
  
    

  
    
   