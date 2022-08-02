import { Component, OnInit } from '@angular/core';
import { sampleDecks } from 'src/app/model/sampleDecks';
import { Router } from '@angular/router';
import {UserSessionService} from 'src/app/service/user-session.service';
import {Collection} from 'src/app/model/collection';
import {environment} from 'src/environments/environment';

@Component({
	selector: 'app-collection',
	templateUrl: './collection.component.html',
	styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

	collection: Collection = { decks: [], userDecks: [] };
	imageAPI = environment.serverAPI + '/images/';

	constructor( private router: Router,
				 private user: UserSessionService,
			   ) { }

	ngOnInit(): void 
	{
		this.user.getCollection()
			.subscribe( c => this.collection = c );
	}

	navigateToCard(): void {
		this.router.navigateByUrl('/card');
	}
}
