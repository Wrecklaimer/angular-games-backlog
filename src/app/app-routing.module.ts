import { resolve } from 'url';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GamesResolver } from './games.resolver';

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
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [GamesResolver]
})
export class AppRoutingModule { }