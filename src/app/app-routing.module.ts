import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { resolve } from 'url';

import {
	GameComponent,
	GameResolver,
	GamesComponent,
	GamesResolver,

} from './views/games';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'games',
		pathMatch: 'full',
	},
	{
		path: 'games',
		component: GamesComponent,
		resolve: {
			games: GamesResolver
		},
		data: {
			title: 'Games',
		},
	},
	{
		path: 'games/:id',
		component: GameComponent,
		resolve: {
			game: GameResolver
		},
		data: {
			title: 'Game',
		},
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
