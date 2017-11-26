import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesTableComponent } from './games-table/games-table.component';
import { GamesTableRowComponent } from './games-table-row/games-table-row.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GamesComponent } from './games/games.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GameComponent } from './game/game.component';
import { ApiModule } from './core/api';

@NgModule({
	declarations: [
		AppComponent,
		GamesTableComponent,
		GamesTableRowComponent,
		GameAddComponent,
		GamesComponent,
		PageNotFoundComponent,
		GameComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		ApiModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
