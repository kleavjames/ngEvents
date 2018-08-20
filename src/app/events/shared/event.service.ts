import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IEvent, ISession } from './event.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {}

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(`/api/events`)
      .pipe(
        catchError(this.handleError<IEvent[]>('getEvents', []))
      );
    // const subject = new Subject<IEvent[]>();
    // setTimeout(() => {
    //   subject.next(EVENTS);
    //   subject.complete();
    // }, 500);

    // return subject;
  }

  // getEvent(id: number): IEvent {
  //   return EVENTS.find(event => event.id === id);
  // }
  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`/api/events/${id}`)
      .pipe(
        catchError(this.handleError<IEvent>('getEvent'))
      );
  }

  saveEvent(event: IEvent): Observable<IEvent> {
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<IEvent>(`/api/events`, event, options)
      .pipe(
        catchError(this.handleError<IEvent>('saveEvent'))
      );
    // event.id = 999;
    // event.sessions = [];
    // EVENTS.push(event);
  }

  // updateEvent(event) {
  //   const index = EVENTS.findIndex(x => x.id = event.id);
  //   EVENTS[index] = event;
  // }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>(`/api/sessions/search?search=${searchTerm}`)
    .pipe(
      catchError(this.handleError<ISession[]>('searchSessions'))
    );
  }

  // searchSessions(searchTerm: string) {
  //   const term = searchTerm.toLocaleLowerCase();
  //   let results: ISession[] = [];

  //   EVENTS.forEach(event => {
  //     let matchSession = event.sessions.filter(session =>
  //       session.name.toLocaleLowerCase().indexOf(term) > -1);

  //       matchSession = matchSession.map((session: any) => {
  //         session.eventId = event.id;
  //         return session;
  //       });
  //     results = results.concat(matchSession);
  //   });

  //   const emitter = new EventEmitter(true);
  //   setTimeout(() => {
  //     emitter.emit(results);
  //   }, 200);
  //   return emitter;
  // }

  // error handling template
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}

