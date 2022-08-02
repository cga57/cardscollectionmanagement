import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private location: Location, private http: HttpClient) {}

  private url = environment.serverAPI;
  
  ngOnInit(): void {
  }

  navigateToRegister(): void {
    this.router.navigateByUrl("/register");
  }

  login(): void {
    this.http.get("http://localhost:3081/api/login").subscribe((data: any) => {
      console.log(data.msg);
      if(data.msg == "Login") {
        this.router.navigateByUrl("/login")
      } else if(data.msg == "Portal") {
        this.router.navigateByUrl("/portal")
      }
    })
  }

  goBack(): void {
    this.location.back();
  }
}
