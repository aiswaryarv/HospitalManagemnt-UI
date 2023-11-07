import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HMS_UI';
readonly APIUrl="https://localhost:7202/api/Appointment/"
  constructor(private http:HttpClientModule)
  {

  }
  Appointment:any=[];

  BookAppointment()
  {

  }
  }