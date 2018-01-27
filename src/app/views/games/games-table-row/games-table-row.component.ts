import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
} from '@angular/core';

import { Game } from '../../../core/api';

@Component({
	selector: '[app-games-table-row]',
	templateUrl: './games-table-row.component.html',
	styleUrls: ['./games-table-row.component.css']
})
export class GamesTableRowComponent implements OnInit {
	@Input() game: Game;

	@Output() remove: EventEmitter<Game> = new EventEmitter();
	@Output() open: EventEmitter<Game> = new EventEmitter();

	constructor() { }

	ngOnInit() { }

	removeGame(game: Game) {
		if (confirm('Delete this game?')) {
			this.remove.emit(game);
		}
	}

	openGame(game: Game) {
		this.open.emit(game);
	}
}
