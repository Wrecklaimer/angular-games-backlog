import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Game } from './game';

@Injectable()
export class ApiMockService {

	constructor() { }

		// API: GET /games
	public getAllGames() : Observable<Game[]> {
		return Observable.of([
			new Game({id: 1, title: 'Test 1', release_date: '1990-01-01', status: 0}),
			new Game({id: 2, title: 'Test 2', release_date: '1990-01-01', status: 0})
		]);
	}

	// API: POST /games
	public createGame(game: Game) : Observable<Game> {
		return Observable.of(new Game({id: 1, title: 'Test Create', release_date: '1990-01-01', status: 0}));
	}

	// API: GET /games/:id
	public getGameById(id: number) : Observable<Game> {
		return Observable.of(new Game({id: 1, title: 'Test GetById', release_date: '1990-01-01', status: 0}));
	}

	// API: PUT /games/:id
	public updateGame(game: Game) : Observable<Game> {
		return Observable.of(new Game({id: 1, title: 'Test Update', release_date: '1990-01-01', status: 0}));
	}

	// DELETE /games/:id
	public deleteGameById(id: number) : Observable<null> {
		return null;
	}
}
