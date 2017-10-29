import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Game } from './game';
import { GamesDataService } from './games-data.service';

@Injectable()
export class GameResolver implements Resolve<Observable<Game>> {

	constructor(private gamesDataService: GamesDataService) {
	}

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Game> {
		return this.gamesDataService.getGameById(route.params['id']);
	}
}
