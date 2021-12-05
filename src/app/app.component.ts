import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';

  topics=['Angular', 'React', 'Vue'];

  userModel=new User('Rahul', 'rahul@gmail.com',7903177996,'','morning',true); 
}
