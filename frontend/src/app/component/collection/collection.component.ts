import { Component, OnInit } from '@angular/core';
import { sampleDecks } from 'src/app/model/sampleDecks';
import { Router } from '@angular/router';

@Component({
	selector: 'app-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

	decks = [];

	constructor(private router: Router,) { }

	ngOnInit(): void { }

	navigateToCard(): void {
		this.router.navigateByUrl('/card');
	}
}
