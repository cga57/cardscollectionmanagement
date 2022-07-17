import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private location: Location) 
  { 
    
  }

  ngOnInit(): void {
  }

  navigateToLogin(): void {
    this.router.navigateByUrl('/login');
  }

  goBack(): void {
    this.location.back();
  }
}
