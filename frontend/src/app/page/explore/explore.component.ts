import { Component, OnInit } from '@angular/core';
import { simpleCards } from '../../model/simpleCards';

@Component({
	selector: 'app-explore',
	templateUrl: './explore.component.html',
	styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit 
{
	cards = simpleCards;

	constructor() { }

	ngOnInit(): void { }

}
