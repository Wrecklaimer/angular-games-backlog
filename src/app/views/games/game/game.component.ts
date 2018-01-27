import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from '../../../core/api';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css'],
	providers: []
})
export class GameComponent implements OnInit {
	game: Game;
	error: any;

	constructor(private activatedRoute: ActivatedRoute) { }

	public ngOnInit() {
		this.activatedRoute.data
			.map(data => data['game'])
			.subscribe(
				(data) => {
					this.game = data;
				},
				(error) => {
					this.error = error;
				}
			);
	}
}
