import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayRegistrationInfo(): void {
    (<HTMLElement>document.getElementById("registerInfo")).style.display = "initial";
    (<HTMLElement>document.getElementById("loginInfo")).style.display = "none";
  }

  displayLoginInfo(): void {
    (<HTMLElement>document.getElementById("loginInfo")).style.display = "initial";
    (<HTMLElement>document.getElementById("registerInfo")).style.display = "none";
  }
}
