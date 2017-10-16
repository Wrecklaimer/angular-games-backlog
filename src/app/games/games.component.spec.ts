import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';
import { GamesDataService } from '../games-data.service';
import { ApiService } from '../api.service';
import { ApiMockService } from '../api-mock.service';

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
					useClass: ApiMockService
				},
				{
					provide: ActivatedRoute,
					useValue: {
						data: Observable.of({
							games: []
						})
					}
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
