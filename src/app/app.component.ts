import { Component } from '@angular/core';

import { Game } from './game';
import { GamesDataService} from './games-data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: []
})
export class AppComponent {
	newGame: Game = new Game({title: '', release_date: '1990-01-01', status: 0});

	constructor(private gamesDataService: GamesDataService) { }

	addGame() {
		this.gamesDataService.addGame(this.newGame);
		this.newGame = new Game({title: '', release_date: '1990-01-01', status: 0});
	}

	onRemoveGame(game: Game) {
		this.gamesDataService.deleteGameById(game.id);
	}

	get games() {
		return this.gamesDataService.getAllGames();
	}
}
