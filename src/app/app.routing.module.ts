import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import {AppointmentComponent} from "./appointment/appointment.component";
import {SessionComponent} from "./session/session.component";

const routes: Routes = [
    { path: 'appointment', component: AppointmentComponent },
    { path: 'session-info', component: SessionComponent },
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }