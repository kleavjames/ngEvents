import { Component, OnInit } from '@angular/core';
import { EventService } from './../events/shared/event.service';
import { AuthService } from './../user/auth.service';
import { ISession } from '../events';
import { $ } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px; }
    li > a.active { color: #fb8e45; }
    @media (max-width: 1200px) { #searchForm { display: none; } }
  `]
})

export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(
    public authService: AuthService,
    private eventService: EventService
  ) {}

  ngOnInit() { }

  searchSession(sessionVal: string) {
    this.eventService.searchSessions(sessionVal)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      });
    this.searchTerm = '';
  }
}
