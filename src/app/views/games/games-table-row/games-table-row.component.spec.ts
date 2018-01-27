import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GamesTableRowComponent } from './games-table-row.component';
import { Game } from '../../../core/api';

@Component({
	template: ''
})
class RouterTestComponent { }

describe('GamesTableRowComponent', () => {
	let component: GamesTableRowComponent;
	let fixture: ComponentFixture<GamesTableRowComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([
					{ path: 'games/:id', component: RouterTestComponent }
				])
				],
			declarations: [
				GamesTableRowComponent,
				RouterTestComponent
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GamesTableRowComponent);
		component = fixture.componentInstance;
		component.game = new Game({id: 1, title: 'Test Row', release_date: '1990-01-01', status: 0});
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
