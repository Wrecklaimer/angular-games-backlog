import { Component } from '@angular/core';

import { Game } from './game';
import { GamesDataService} from './games-data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [GamesDataService]
})
export class AppComponent {
	newGame: Game = new Game();

	constructor(private gamesDataService: GamesDataService) { }

	addGame() {
		this.gamesDataService.addGame(this.newGame);
		this.newGame = new Game();
	}

	removeGame(game) {
		this.gamesDataService.deleteGameById(game.id);
	}

	get games() {
		return this.gamesDataService.getAllGames();
	}
}
