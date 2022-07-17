import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ServerApiService 
{
	private url = environment.serverAPI;

	constructor( private http: HttpClient ) { }

}
