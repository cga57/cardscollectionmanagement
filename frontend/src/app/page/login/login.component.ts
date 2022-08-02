import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { User } from "src/app/model/user";
import { UserSessionService } from "src/app/service/user-session.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private location: Location, private http: HttpClient, private session: UserSessionService) {}

  private url = environment.serverAPI;
  
  ngOnInit(): void {
  }

  navigateToRegister(): void {
    this.router.navigateByUrl("/register");
  }

  login(): void {

    var password: string = (<HTMLInputElement>document.getElementById("password"))
      .value;
    var email: string = (<HTMLInputElement>document.getElementById("email"))
      .value;

    var user: any = {email: email, password: password };

    this.http.post(this.url + "login", user).subscribe((data: any) => {
      if(data.msg == "Login") {
        this.router.navigateByUrl("/login")
      } else if(data.msg == "Portal") {
        this.router.navigateByUrl("/portal")
        // Store this as a global variable in the service
        console.log(data.authenticatedEmail)
        this.session.setEmail(data.authenticatedEmail);
      }
    })
  }

  goBack(): void {
    this.location.back();
  }
}
