import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:7202/api/Appointment/';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable({
    providedIn: 'root',
  })
  export class Services {
    constructor(private http: HttpClient) {}

    appointment(appointment: any) : Observable<any> {
        debugger
        return this.http.post(AUTH_API,appointment,httpOptions);
      }
      
  }