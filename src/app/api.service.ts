import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../environments/environment';
import { Game } from './game';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

	constructor(private http: HttpClient) { }

	// API: GET /games
	public getAllGames(): Observable<Game[]> {
		return this.http
			.get<Game[]>(API_URL + '/games')
			.map(data => data.map(game => new Game(game)))
			.catch(this.handleError);
	}

	// API: POST /games
	public createGame(game: Game): Observable<Game> {
		return this.http
			.post(API_URL + '/games', game)
			.map(response => {
				return new Game(response);
			})
			.catch(this.handleError);
	}

	// API: GET /games/:id
	public getGameById(id: number): Observable<Game> {
		return this.http
			.get(API_URL + '/games/' + id)
			.map((response: Response) => {
				return new Game(response);
			})
			.catch(this.handleError);
	}

	// API: PUT /games/:id
	public updateGame(game: Game): Observable<Game> {
		return this.http
			.put(API_URL + '/games/' + game.id, game)
			.map(response => {
				return new Game(response);
			})
			.catch(this.handleError);
	}

	// DELETE /games/:id
	public deleteGameById(id: number): Observable<null> {
		return this.http
			.delete(API_URL + '/games/' + id)
			.catch(this.handleError);
	}

	private handleError(error: any) {
		console.error('ApiService::handleError', error);

		return Observable.throw(error);
	}
}
