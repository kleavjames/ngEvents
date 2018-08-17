import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Create Event Form will go here]</h3>
      <br>
      <br>
      <button type="submit" class="btn btn-primary">Save</button>
      &nbsp;
      <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
  `,
  styles: [`
  `]
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() { }

  cancel(): void {
    this.router.navigate(['/events']);
    this.toastr.info('No events created.', 'Cancelled');
  }
}
