import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Game } from './game';
import { GamesDataService } from './games-data.service';

@Injectable()
export class GameResolver implements Resolve<Observable<Game>> {

	constructor(private gamesDataService: GamesDataService, private router: Router) {
	}

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Game> {
		return this.gamesDataService.getGameById(route.params['id'])
			.catch(error => {
				this.router.navigate(['/games']);

				return Observable.of(new Game());
			});
	}
}
