import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GamesDataService } from './games-data.service';
import { GamesTableComponent } from './games-table/games-table.component';
import { GamesTableRowComponent } from './games-table-row/games-table-row.component';

@NgModule({
	declarations: [
		AppComponent,
		GamesTableComponent,
		GamesTableRowComponent
	],
	imports: [
		FormsModule,
		BrowserModule
	],
	providers: [GamesDataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
