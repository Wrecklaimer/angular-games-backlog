import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GamesDataService } from './games-data.service';
import { GamesTableComponent } from './games-table/games-table.component';
import { GamesTableRowComponent } from './games-table-row/games-table-row.component';
import { ApiService } from './api.service';
import { GameAddComponent } from './game-add/game-add.component';

@NgModule({
	declarations: [
		AppComponent,
		GamesTableComponent,
		GamesTableRowComponent,
		GameAddComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		HttpModule
	],
	providers: [
		GamesDataService,
		ApiService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
