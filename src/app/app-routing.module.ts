import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { resolve } from 'url';

import { GameComponent } from './game/game.component';
import { GameResolver } from './game/game.resolver';
import { GamesComponent } from './games/games.component';
import { GamesResolver } from './games/games.resolver';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'games',
		pathMatch: 'full'
	},
	{
		path: 'games',
		component: GamesComponent,
		resolve: {
			games: GamesResolver
		}
	},
	{
		path: 'games/:id',
		component: GameComponent,
		resolve: {
			game: GameResolver
		}
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [
		GamesResolver,
		GameResolver
	]
})
export class AppRoutingModule { }