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

	public addDeck( deck: Deck ): Observable<string>
	{
		return this.http.post<string>( this.url + 'deck', deck );
	}

	public addUserDeck( userDeck: UserDeck, deck?: Deck ): Observable<string>
	{
		if( deck )
		{
			return this.addDeck( deck ).pipe( 
				map( data =>
				{
					userDeck.deck = data;
					return this.http.post<string>( this.url + 'userDeck', userDeck );
				} ),
				concatAll(),
			);
		}
		else
		{
			return this.http.post<string>( this.url + 'userDeck', userDeck );
		}
	}
}
