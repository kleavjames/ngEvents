import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <app-event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></app-event-thumbnail>
      </div>
    </div>
  </div>
  `
})

export class EventsListComponent implements OnInit {
  events: any[];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
