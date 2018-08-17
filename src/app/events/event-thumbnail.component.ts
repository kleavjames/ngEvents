import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event.time">
      Time: {{event.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{event.price}}</div>
    <div *ngIf="event.location">
      <span>Location: {{event.location.address}}</span>
      <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
    </div>
    <div *ngIf="event.onlineUrl">
      Online URL: {{event.onlineUrl}}
    </div>
  </div>
  `,
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
