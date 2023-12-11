import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Services } from '../shared.service';
import '@angular/localize/init';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  events: string[] = [];
  Patientname: any;
  appointmentdate: any;
  Doctor: any;
  DiseaseName: any;
  isSuccessful = false;
  errorMessage = '';
  form: any = {
    firstName: null,
    appointmentdate: null,
    Doctor: null,
    DiseaseName: null
  };
  public gridData: any[] = [
    { productName: 'Product 1', category: 'Category A', price: 50 },
    { productName: 'Product 2', category: 'Category B', price: 75 },
    // Add more data as needed
  ];
  constructor(private formBuilder: FormBuilder, private service: Services) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        appointmentdate: ['', Validators.required],
        Doctor: ['', Validators.required],
        DiseaseName: ['', Validators.required],
      },

    );
  }

  get f() {
    console.log(this.registerForm.toString());
    return this.registerForm.controls;
  }

  onSubmit() {
    debugger
    this.submitted = true;
    const { firstName, appointmentdate, Doctor, DiseaseName } = this.form;

    if (this.registerForm.invalid) {
      return;
    }
    else {
      //for (let j = 0; j < this.registerForm.value.length; j++) {

      var appointment = {
        Patientname: this.registerForm.value.firstName,
        appointmentdate: this.registerForm.value.appointmentdate,
        Doctor: this.registerForm.value.Doctor,
        DiseaseName: this.registerForm.value.DiseaseName
      }
      this.service.appointment(appointment).subscribe({
        next: data => {
          console.log(data);
          this.isSuccessful = true;
          alert(
            'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)
          );
        },
        error: err => {
          this.errorMessage = err.error.message;

        }
      });
      //}

    }

  }

  onReset() {
    debugger
    this.submitted = false;
    this.registerForm.reset();
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  public getBackgroundColor(price: number): string {
    // Your logic to determine the background color based on the price
    // For example, setting a background color based on a price range
    if (price < 50) {
      return 'lightgreen';
    } else if (price >= 50 && price < 100) {
      return 'lightblue';
    } else {
      return 'lightcoral';
    }
  }
}