import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  branch = ['CSE', 'IT', 'CSIT', 'ECE', 'CIVIL','ME','EI','EN'];
  year = ['I','II','III','IV'];

  userModel = new User('name...', 'abc@gm.com', 1234567890, 'CSE', 'Hosteller', 'II',80,77,8080808080);
}
