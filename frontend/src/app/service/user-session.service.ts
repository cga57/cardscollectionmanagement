import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Collection } from '../model/collection';
import { StorageApiService } from './storage-api.service';

@Injectable({
	providedIn: 'root'
})
export class UserSessionService {

	// Default values
	url = environment.serverAPI;
	email: string = "null";
	loggedIn: boolean = false;
	private collection: Collection;
	private broadcast: BehaviorSubject<Collection>;
	

	constructor( 
		private http: HttpClient,
		private storage: StorageApiService,
	) 
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
		this.http.delete( this.url + 'logout' )
			.subscribe( data => console.log( data ) );
	}
}
