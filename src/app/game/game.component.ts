import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Game } from '../game';
import { GamesDataService} from '../games-data.service';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css'],
	providers: [GamesDataService]
})
export class GameComponent implements OnInit {
	game: Game;

	constructor(private gamesDataService: GamesDataService, private activatedRoute: ActivatedRoute, private router: Router) { }

	public ngOnInit() {
		this.activatedRoute.data
			.map((data) => data['game'])
			.subscribe((data) => {
				this.game = data;
			});
	}
}
