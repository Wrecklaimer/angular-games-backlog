import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
} from '@angular/core';

import { Game } from '../core/api';

@Component({
	selector: 'app-games-table',
	templateUrl: './games-table.component.html',
	styleUrls: ['./games-table.component.css'],
})
export class GamesTableComponent implements OnInit {
	@Input() games: Game[];

	@Output() remove: EventEmitter<Game> = new EventEmitter();
	@Output() open: EventEmitter<Game> = new EventEmitter();

	constructor() { }

	ngOnInit() { }

	onRemoveGame(game: Game) {
		this.remove.emit(game);
	}

	onOpenGame(game: Game) {
		this.open.emit(game);
	}
}
