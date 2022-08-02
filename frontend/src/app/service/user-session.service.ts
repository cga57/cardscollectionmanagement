import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Deck } from '../model/deck';
import { UserDeck } from '../model/user-deck';
import { Collection } from '../model/collection';
import { StorageApiService } from './storage-api.service';

@Injectable({
	providedIn: 'root'
})
export class UserSessionService {

	// Default values
	email: string = "null";
	loggedIn: boolean = false;
	private collection: Collection;
	private broadcast: BehaviorSubject<Collection>;
	

	constructor( private storage: StorageApiService ) 
	{ 
		this.collection =
		{
			decks: [],
			userDecks: [],
		};

		this.broadcast = new BehaviorSubject<Collection>( this.collection );
	}

	getCollection(): Observable<Collection>
	{
		this.storage.getAllDecks()
			.subscribe( data =>
			{
				this.collection.userDecks = data[0];
				this.collection.decks = data[1];
			} );
		return this.broadcast.asObservable();
	}

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
