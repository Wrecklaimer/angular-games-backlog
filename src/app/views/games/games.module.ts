import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesComponent } from './games.component';
import { GameComponent } from './game/game.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GamesTableComponent } from './games-table/games-table.component';
import { GamesTableRowComponent } from './games-table-row/games-table-row.component';
import { GamesResolver } from './games.resolver';
import { GameResolver } from './game/game.resolver';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule
	],
	declarations: [
		GamesComponent,
		GameComponent,
		GameAddComponent,
		GamesTableComponent,
		GamesTableRowComponent,
	],
	providers: [
		GamesResolver,
		GameResolver,
	],
	exports: [
		GamesComponent,
		GameComponent,
		GameAddComponent,
		GamesTableComponent,
		GamesTableRowComponent,
	]
})
export class GamesModule { }
