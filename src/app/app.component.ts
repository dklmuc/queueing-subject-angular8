import { Component, OnInit } from '@angular/core';
import { QueueingSubject } from 'queueing-subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8';
  test$: QueueingSubject<string> = new QueueingSubject();
}
