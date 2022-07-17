import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private router: Router,
              private location: Location) 
  { 

  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  saveInventory(): void {
    console.log("saveInventory() works!")
  }
}
