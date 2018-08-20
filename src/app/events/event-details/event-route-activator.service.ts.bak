import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from './../shared/event.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivator implements CanActivate {

  constructor(
    private eventService: EventService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) {
      this.router.navigate(['/404']);
    } else {
      return eventExists;
    }
  }
}
