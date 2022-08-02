import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  // Default values
  email: string = "null";
  loggedIn: boolean = false;

  constructor() { }

  getEmail(): string {
    return this.email;
  }
  
  getLoggedInStatus(): boolean {
    return this.loggedIn;
  }

  setEmail(email: string) {
    this.email = email;
    this.loggedIn = true;
  }

  logout(): void {
    this.email = "null"
    this.loggedIn = false
  }
}
