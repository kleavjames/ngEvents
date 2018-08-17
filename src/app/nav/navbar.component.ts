import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() { }
}
