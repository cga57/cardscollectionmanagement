import { Component, OnInit } from '@angular/core';
import { sampleDecks } from '../../model/sampleDecks';

@Component({
	selector: 'app-explore',
	templateUrl: './explore.component.html',
	styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit 
{
	decks = sampleDecks;

	constructor() { }

	ngOnInit(): void 
	{ 
	}
}
