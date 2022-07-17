import { Component, OnInit } from '@angular/core';
import { sampleDecks } from 'src/app/model/sampleDecks';

@Component({
	selector: 'app-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

	decks = sampleDecks;

	constructor() { }

	ngOnInit(): void { }

}
