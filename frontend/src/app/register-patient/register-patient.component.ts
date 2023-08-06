import {Component, OnInit} from '@angular/core';
import {UnregisteredService} from "../unregistered.service";

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {
  constructor(private service: UnregisteredService) {
  }

  ngOnInit(): void {
  }

  firstname: string;
  lastname: string;
  username: string;
  password: string;
  address: string;
  phone: string;
  mail: string;

  message: string;

  register() {
    this.service.registerPatient(this.firstname, this.lastname, this.username, this.password, this.address, this.phone, this.mail).subscribe(respObj => {
      if (respObj['message'] == 'ok')
        this.message = 'User added'
      else
        this.message = 'Error'
    });
  }
}
