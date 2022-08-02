import { HttpClient } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, concatAll, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Deck } from '../model/deck';
import { UserDeck } from '../model/user-deck';

@Injectable({
	providedIn: 'root'
})

export class StorageApiService 
{
	private url = environment.serverAPI;

	constructor( private http: HttpClient ) { }

	// retrieve a deck; return deck
	public getDeck( id: string ): Observable<Deck>
	{
		return this.http.get<Deck>( this.url + 'deck/' + id );
	}

	// add a new deck; return the new deck
	public addDeck( deck: Deck ): Observable<Deck>
	{
		return this.http.post<Deck>( this.url + 'deck', deck );
	}

	// update a deck; return deck before update
	public updateDeck( deck: Deck ): Observable<Deck>
	{
		return this.http.put<Deck>( this.url + 'deck', deck );
	}

	// delete a deck; return the deck deleted
	public deleteDeck( id: string ): Observable<Deck>
	{
		return this.http.delete<Deck>( this.url + 'deck/' + id );
	}

	// retrieve an user deck; return user deck
	public getUserDeck( id: string ): Observable<UserDeck>
	{
		return this.http.get<UserDeck>( this.url + 'userDeck/' + id );
	}

	// add a new user deck; return the new user deck
	public addUserDeck( userDeck: UserDeck, deck?: Deck ): Observable<UserDeck>
	{
		if( deck )
		{
			return this.addDeck( deck ).pipe( 
				map( data =>
				{
					userDeck.deck = data._id;
					return this.http.post<UserDeck>( this.url + 'userDeck', userDeck );
				} ),
				concatAll(),
			);
		}
		else
		{
			return this.http.post<UserDeck>( this.url + 'userDeck', userDeck );
		}
	}

	// update an user deck; return user deck before update
	public updateUserDeck( userDeck: UserDeck ): Observable<UserDeck>
	{
		return this.http.put<UserDeck>( this.url + 'userDeck', userDeck );
	}

	// delete an user deck; return the user deck deleted
	public deleteUserDeck( id: string ): Observable<UserDeck>
	{
		return this.http.delete<UserDeck>( this.url + 'userDeck/' + id );
	}
}
