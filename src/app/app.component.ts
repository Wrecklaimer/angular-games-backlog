import { Component, OnInit} from '@angular/core';

import { Game } from './game';
import { GamesDataService} from './games-data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: []
})
export class AppComponent implements OnInit {
	game: Game = new Game({title: '', release_date: '1990-01-01', status: 0});
	games: Game[] = [];

	constructor(private gamesDataService: GamesDataService) { }

	public ngOnInit() {
		this.gamesDataService
			.getAllGames()
			.subscribe((games) => {
				this.games = games;
			});
	}

	addGame(game) {
		this.gamesDataService
			.addGame(game)
			.subscribe((game) => {
				this.games = this.games.concat(game);
				this.game = new Game({title: '', release_date: '1990-01-01', status: 0});
			});
	}

	onRemoveGame(game: Game) {
		this.gamesDataService
			.deleteGameById(game.id)
			.subscribe((_) => {
				this.games = this.games.filter((z) => z.id !== game.id);
			});
	}
}
