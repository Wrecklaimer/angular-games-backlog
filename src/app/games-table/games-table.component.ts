import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Game } from '../game';

@Component({
	selector: 'app-games-table',
	templateUrl: './games-table.component.html',
	styleUrls: ['./games-table.component.css'],
})
export class GamesTableComponent implements OnInit {
	@Input() games: Game[];

	@Output() remove: EventEmitter<Game> = new EventEmitter();

	constructor() { }

	ngOnInit() { }

	onRemoveGame(game: Game) {
		this.remove.emit(game);
	}
}
