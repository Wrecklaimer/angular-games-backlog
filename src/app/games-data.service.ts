import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable()
export class GamesDataService {
	lastId: number = 0;
	games: Game[] = [];

	constructor() { }

	addGame(game: Game): GamesDataService {
		if (!game.id) {
			game.id = ++this.lastId;
		}
		
		this.games.push(game);

		return this;
	}

	updateGameById(id: number, values: Object = {}): Game {
		let game = this.getGameById(id);

		if (!game) {
			return null;
		}

		Object.assign(game, values);

		return game;
	}

	deleteGameById(id: number): GamesDataService {
		this.games = this.games.filter(z => z.id !== id);

		return this;
	}

	getAllGames(): Game[] {
		return this.games;
	}

	getGameById(id: number): Game {
		return this.games.filter(z => z.id === id).pop();
	}
}
