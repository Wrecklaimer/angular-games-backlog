import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { GamesDataService } from './games-data.service';
import { Game } from './game';

@Injectable()
export class GamesResolver implements Resolve<Observable<Game[]>> {

	constructor(
		private gamesDataService: GamesDataService
	) {
	}

	public resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Game[]> {
		return this.gamesDataService.getAllGames();
	}
}
