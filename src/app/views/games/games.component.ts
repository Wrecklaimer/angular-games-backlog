import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Game, GamesDataService} from '../../core/api';

@Component({
	selector: 'app-games',
	templateUrl: './games.component.html',
	styleUrls: ['./games.component.css'],
	providers: [GamesDataService]
})
export class GamesComponent implements OnInit {
	newGame: Game = new Game({title: '', release_date: '1990-01-01', status: 0});
	games: Game[] = [];

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private gamesDataService: GamesDataService
	) { }

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
			.subscribe((data) => {
				this.games = this.games.concat(data);
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

	onOpenGame(game: Game) {
		this.router.navigate(['/games/1']);
	}
}
