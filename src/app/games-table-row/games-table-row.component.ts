import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Game } from '../game';

@Component({
  selector: '[app-games-table-row]',
  templateUrl: './games-table-row.component.html',
  styleUrls: ['./games-table-row.component.css']
})
export class GamesTableRowComponent implements OnInit {
  @Input() game: Game;

  @Output() remove: EventEmitter<Game> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeGame(game: Game) {
		this.remove.emit(game);
	}
}
