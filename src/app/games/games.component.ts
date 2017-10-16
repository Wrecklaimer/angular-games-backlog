import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from '../game';
import { GamesDataService} from '../games-data.service';

@Component({
	selector: 'app-games',
	templateUrl: './games.component.html',
	styleUrls: ['./games.component.css'],
	providers: [GamesDataService]
})
export class GamesComponent implements OnInit {
	newGame: Game = new Game({title: '', release_date: '1990-01-01', status: 0});
	games: Game[] = [];

	constructor(private gamesDataService: GamesDataService, private activatedRoute: ActivatedRoute) { }

	public ngOnInit() {
		this.activatedRoute.data
			.map((data) => data['games'])
			.subscribe((games) => {
				this.games = games;
			});
	}

	onAddGame(game) {
		this.gamesDataService
			.addGame(game)
			.subscribe((game) => {
				this.games = this.games.concat(game);
				this.newGame = new Game({title: '', release_date: '1990-01-01', status: 0});
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
