import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `my first angular project`;
  name = 'Kristin Geiger';
  itemList = ['Outlander', 'Arrow', 'Breaking Bad', 'The Flash'];
  rectangle = {
    length: 5,
    width: 6,
    area: function() {
       return this.length * this.width;
    }
  }
}
