import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Deck } from "src/app/model/deck";
import { UserDeck } from "src/app/model/user-deck";
import { Brand } from "src/app/model/brand";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  private url = environment.serverAPI;

  constructor(
    private router: Router,
    private location: Location,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  goBack(): void {
    this.location.back();
  }

  saveInventory(): void {
    var deck_total: string = (<HTMLInputElement>(
      document.getElementById("total")
    )).value;
    var deck_sealed: string = (<HTMLInputElement>(
      document.getElementById("sealed")
    )).value;
    var deck_opened: string = (<HTMLInputElement>(
      document.getElementById("opened")
    )).value;

    var deck_title: string = (<HTMLInputElement>(
      document.getElementById("title")
    )).value;
    var deck_edition: string = (<HTMLInputElement>(
      document.getElementById("edition")
    )).value;
    var deck_style: string = (<HTMLInputElement>(
      document.getElementById("style")
    )).value;
    var deck_brand: string = (<HTMLInputElement>(
      document.getElementById("brand")
    )).value;
    var deck_product_description: string = (<HTMLInputElement>(
      document.getElementById("product-description")
    )).value;

    var deck_date_of_issue: string = (<HTMLInputElement>(
      document.getElementById("date-of-issue")
    )).value;
    var deck_stock: string = (<HTMLInputElement>(
      document.getElementById("stock")
    )).value;
    var deck_retail_price: string = (<HTMLInputElement>(
      document.getElementById("retail-price")
    )).value;
    var deck_print_run: string = (<HTMLInputElement>(
      document.getElementById("print-run")
    )).value;
    var deck_manufacturer: string = (<HTMLInputElement>(
      document.getElementById("manufacturer")
    )).value;

    var deck_brand_object: Brand = {
      name: deck_brand,
    };

    var deck_object: Deck = {
      isPublic: false,
      name: deck_title,
      edition: deck_edition,
      image: "",
      brand: deck_brand_object,
      date_of_issue: deck_date_of_issue,
      stock: deck_stock,
      print_run: deck_print_run,
      retail_price: deck_retail_price,
      manufacturer: deck_manufacturer,
      total: deck_total,
      sealed: deck_sealed,
      opened: deck_opened,
      style: deck_style,
      product_description: deck_product_description,
    };

    var user_deck: UserDeck = {
      deck: deck_object,
    };

    this.http.post(this.url + "addDeck", user_deck).subscribe((data) => {
      console.log(data);
    });
  }
}
