import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from './shared';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em { float: right; color: #ec5757; font-size: 14px; margin-top: 2px; }
    .error input { background-color: #e3c3c5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  newEvent: any;

  constructor(
    private eventService: EventService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  saveEvent(eventData) {
    this.eventService.saveEvent(eventData);
    this.toastr.success('Event successfully created.');
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel(): void {
    this.router.navigate(['/events']);
    this.toastr.info('No events created.', 'Cancelled');
  }
}
