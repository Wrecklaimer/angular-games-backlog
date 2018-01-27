import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { GamesTableComponent } from './games-table.component';
import { Game } from '../../../core/api';

describe('GamesTableComponent', () => {
	let component: GamesTableComponent;
	let fixture: ComponentFixture<GamesTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ GamesTableComponent ],
			schemas: [
				NO_ERRORS_SCHEMA
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GamesTableComponent);
		component = fixture.componentInstance;
		component.games = [
			new Game({id: 1, title: 'Test 1', release_date: '1990-01-01', status: 0}),
			new Game({id: 2, title: 'Test 2', release_date: '1990-01-01', status: 0})
		];
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
