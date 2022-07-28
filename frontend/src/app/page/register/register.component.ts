import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  private url = environment.serverAPI;
  constructor(
    private router: Router,
    private location: Location,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  navigateToLogin(): void {
    this.router.navigateByUrl("/login");
  }

  goBack(): void {
    this.location.back();
  }
  register(): void {
    var name: string = (<HTMLInputElement>document.getElementById("name"))
      .value;
    var email: string = (<HTMLInputElement>document.getElementById("email"))
      .value;
    var password: string = (<HTMLInputElement>document.getElementById("pwd"))
      .value;

    var jsonFormat = { name: name, email: email, password: password };

    this.http.post(this.url + "session", jsonFormat).subscribe((data) => {
      console.log(data);
    });
  }
}
