import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesModule } from './views/games';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ApiModule } from './core/api';

@NgModule({
	imports: [
		FormsModule,
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		ApiModule,
		GamesModule,
	],
	declarations: [
		AppComponent,
		PageNotFoundComponent,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
