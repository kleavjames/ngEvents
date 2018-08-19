import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styles: [`
  `]
})
export class SessionListComponent implements OnInit {
  @Input() sessions: ISession[];

  constructor() { }

  ngOnInit() { }
}
