import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	Resolve,
	RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Game, GamesDataService } from '../core/api';

@Injectable()
export class GamesResolver implements Resolve<Observable<Game[]>> {
	constructor(private gamesDataService: GamesDataService) {
	}

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Game[]> {
		return this.gamesDataService.getAllGames();
	}
}
