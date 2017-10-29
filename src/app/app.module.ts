import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiService } from './api.service';
import { GamesDataService } from './games-data.service';
import { GamesTableComponent } from './games-table/games-table.component';
import { GamesTableRowComponent } from './games-table-row/games-table-row.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GamesComponent } from './games/games.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GameComponent } from './game/game.component';

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
		HttpModule,
		AppRoutingModule
	],
	providers: [
		GamesDataService,
		ApiService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
