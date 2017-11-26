import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './api.service';
import { ApiServiceMock } from './api.service.mock';
import { GamesDataService } from './games/games-data.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	providers: [
		ApiService,
		ApiServiceMock,
		GamesDataService
	]
})
export class ApiModule { }
