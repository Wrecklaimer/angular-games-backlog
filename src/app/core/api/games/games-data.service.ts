import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../api.service';
import { Game } from './game.model';

@Injectable()
export class GamesDataService {
	constructor(private api: ApiService) { }

	addGame(game: Game): Observable<Game> {
		return this.api.createGame(game);
	}

	updateGame(game: Game): Observable<Game> {
		return this.api.updateGame(game);
	}

	deleteGameById(id: number): Observable<Game> {
		return this.api.deleteGameById(id);
	}

	getAllGames(): Observable<Game[]> {
		return this.api.getAllGames();
	}

	getGameById(id: number): Observable<Game> {
		return this.api.getGameById(id);
	}
}
