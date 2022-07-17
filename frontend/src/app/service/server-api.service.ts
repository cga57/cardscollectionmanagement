import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ServerApiService 
{
	private url = environment.serverAPI;

	constructor( private http: HttpClient ) { }

	public getSomeWeirdStringOnServer() : Observable<string>
	{
		return this.http.get<string>( this.url + 'weirdString' );

		// in component do something like this:
		// getSomeWeirdStringOnserver()
		// 		.subscribe( dataFromServer => console.log( dataFromServer ) );
	}
}
