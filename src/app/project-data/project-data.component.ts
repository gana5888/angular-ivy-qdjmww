import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.css'],
})
export class ProjectDataComponent implements OnInit {
  @Output() someEvent: EventEmitter<any> = new EventEmitter();
  arg;
  constructor() {}

  ngOnInit() {}
  raiseSomeEvent() {
    this.someEvent.emit(this.arg);
  }
}
