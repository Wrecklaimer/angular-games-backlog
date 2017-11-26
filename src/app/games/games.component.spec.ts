import { ActivatedRoute, Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { GamesComponent } from './games.component';
import { ApiService, ApiServiceMock, GamesDataService } from '../core/api';

describe('GamesComponent', () => {
	let component: GamesComponent;
	let fixture: ComponentFixture<GamesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ GamesComponent ],
			providers: [
				GamesDataService,
				{
					provide: ApiService,
					useClass: ApiServiceMock
				},
				{
					provide: ActivatedRoute,
					useValue: {
						data: Observable.of({
							games: []
						})
					}
				},
				{
					provide: Router,
					useValue: {}
				}
			],
			schemas: [
				NO_ERRORS_SCHEMA
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GamesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
