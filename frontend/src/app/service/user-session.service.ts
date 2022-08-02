import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Collection } from '../model/collection';
import { User } from '../model/user';
import { StorageApiService } from './storage-api.service';

@Injectable({
	providedIn: 'root'
})
export class UserSessionService {

	// Default values	
	private url = environment.serverAPI;
	email: string = "null";
	loggedIn: boolean = false;
	private collection: Collection;
	private broadcast: BehaviorSubject<Collection>;
	

	constructor( 
		private http: HttpClient,
		private router: Router,
		private storage: StorageApiService,
	) 
	{ 
		this.collection =
		{
			decks: [],
			userDecks: [],
		};

		this.broadcast = new BehaviorSubject<Collection>( this.collection );
		
		if( sessionStorage.getItem( 'userEmail' ) )
		{
			this.email = sessionStorage.getItem( 'userEmail' )!;
			this.loggedIn = true;
		}
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
		sessionStorage.setItem( 'userEmail', email );
	}

	login( user: User ): void {
		this.http.post(this.url + "login", user).subscribe((data: any) => {
		  if(data.msg == "Login") {
			this.router.navigateByUrl("/login")
		  } else if(data.msg == "Portal") {
			this.router.navigateByUrl("/portal")
			// Store this as a global variable in the service
			console.log(data.authenticatedEmail)
			this.setEmail(data.authenticatedEmail);
		  }
		});
	}

	logout(): void {
		this.email = "null"
		this.loggedIn = false
		this.http.delete( this.url + 'logout' )
			.subscribe( data => console.log( data ) );
		sessionStorage.removeItem( 'userEmail' );
	}
}
