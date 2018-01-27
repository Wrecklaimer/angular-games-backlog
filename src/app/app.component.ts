import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	private appTitle: string;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private titleService: Title,
	) { }

	public ngOnInit() {
		// Get the initial title set in index.html
		this.appTitle = this.titleService.getTitle();

		this.router.events
			.filter((event) => event instanceof NavigationEnd)
			.map(() => this.activatedRoute)
			.map((route) => {
				while (route.firstChild) {
					route = route.firstChild;
				}

				return route;
			})
			.filter((route) => route.outlet === 'primary')
			.mergeMap((route) => route.data)
			.subscribe(
				(event) => {
					let pageTitle = this.appTitle;
					const title = event['title'];

					// Only include route title if specified
					if (title) {
						pageTitle = `${title} | ${this.appTitle}`;
					}

					this.titleService.setTitle(pageTitle);
				}
			);
	}
}
