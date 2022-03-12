import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // name = 'Angular ' + VERSION.major;
  home: boolean = true;
  isgood: boolean = false;
  items =[{id:'',name:'item1'},{id:'22',name:'item2'}];

  btnClicked($event) {
    console.log($event)
    alert('button clicked')
  }
}
