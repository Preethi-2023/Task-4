import { Component } from '@angular/core'
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task4';

  constructor(public myservice: MyserviceService){}


// save(event:any){
//     this.myservice.setinput(event.target.value);
//     console.log(event.target.value);
// }

}
