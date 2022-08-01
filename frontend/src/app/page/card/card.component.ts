import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { Deck } from "src/app/model/deck";
import { UserDeck } from "src/app/model/user-deck";
import { Brand } from "src/app/model/brand";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { StorageApiService } from "src/app/service/storage-api.service";

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
    private storage: StorageApiService,
  ) {}

  ngOnInit(): void {}

  goBack(): void {
    this.location.back();
  }

  saveInventory(): void {
    var deck_notes: string = (<HTMLTextAreaElement>(
      document.getElementById("notes")
    )).value;
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

    var deck_storage: string = (<HTMLInputElement>(
      document.getElementById("storage")
    )).value;
    var deck_cost: string = (<HTMLInputElement>(
      document.getElementById("cost")
    )).value;

    var deck_date_of_issue: string = (<HTMLInputElement>(
      document.getElementById("date-of-issue")
    )).value;
    var deck_stock: string = (<HTMLInputElement>(
      document.getElementById("stock")
    )).value;
    var deck_finish: string = (<HTMLInputElement>(
      document.getElementById("finish")
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

    var img: HTMLInputElement = <HTMLInputElement>document.getElementById('deck-img');
    var pathName: string = img.value;;

    var deck_brand_object: Brand = {
      name: deck_brand,
    };

    var deck_object: Deck = {
      isPublic: false,
      name: deck_title,
      edition: deck_edition,
      image: pathName,
      brand: deck_brand_object,
	  date_of_issue: new Date( deck_date_of_issue ),
      stock: deck_stock,
	  finish: deck_finish,
      print_run: Number( deck_print_run ),
      retail_price: Number( deck_retail_price ),
      manufacturer: deck_manufacturer,
      //style: deck_style, 	// <-- abandoned attribute :P
      product_description: deck_product_description,
    };

    var user_deck: UserDeck = {
		//total: deck_total, 	// <-- this is a derived attribute (= sealed + opened)
		sealed: Number( deck_sealed ),
		opened: Number( deck_opened ),
		storage: deck_storage,
		cost: Number( deck_cost ),
		additional_notes: deck_notes,
    };

	this.storage.addUserDeck( user_deck, deck_object )
		.subscribe( {
			next: data => console.log( 'successfully added user deck' ),
			error: err => console.error( 'failed to add user deck' ),
		} );
  }
}
