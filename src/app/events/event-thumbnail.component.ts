import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    .green { color: #19e619 !important }
    .bold { font-weight: bold; }
  `]
})

export class EventThumbnailComponent implements OnInit {
  @Input() event: any;

  constructor() { }

  ngOnInit() { }

  // using ngClass
  getStartTimeClass() {
    const isNormal = this.event && this.event.time === '9:00 am';
    return { green: isNormal, bold: isNormal };
  }

  // using ngStyle
  getStartTimeStyle(): any {
    if (this.event && this.event.time === '9:00 am') {
      return { color: '#19e619', 'font-weight': 'bold' };
    } else {
      return {};
    }
  }
}
