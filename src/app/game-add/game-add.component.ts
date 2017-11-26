import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
} from '@angular/core';

import { Game } from '../core/api';

@Component({
	selector: 'app-game-add',
	templateUrl: './game-add.component.html',
	styleUrls: ['./game-add.component.css']
})
export class GameAddComponent implements OnInit {
	@Input() newGame: Game;

	@Output() add: EventEmitter<Game> = new EventEmitter();

	constructor() { }

	ngOnInit() {}

	addGame(game: Game) {
		this.add.emit(game);
	}
}
