import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { GameAddComponent } from './game-add.component';
import { Game } from '../core/api';

describe('GameAddComponent', () => {
	let component: GameAddComponent;
	let fixture: ComponentFixture<GameAddComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ FormsModule ],
			declarations: [ GameAddComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GameAddComponent);
		component = fixture.componentInstance;
		component.newGame = new Game({id: 1, title: 'Test Game', release_date: '1990-01-01', status: 0});
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
