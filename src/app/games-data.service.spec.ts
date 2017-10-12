import { TestBed, inject } from '@angular/core/testing';

import { Game } from './game';
import { GamesDataService } from './games-data.service';

describe('GamesServiceService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [GamesDataService]
		});
	});

	it('should be created', inject([GamesDataService], (service: GamesDataService) => {
		expect(service).toBeTruthy();
	}));

	describe('#getAllGames()', () => {
		it('should return an empty array by default', inject([GamesDataService], (service: GamesDataService) => {
			expect(service.getAllGames()).toEqual([]);
		}));

		it('should return all Games', inject([GamesDataService], (service: GamesDataService) => {
			let game1 = new Game({title: 'Test 1', release_date: '1990-01-01', status: 0});
			let game2 = new Game({title: 'Test 2', release_date: '1990-01-01', status: 0});
			
			service.addGame(game1);
			service.addGame(game2);

			expect(service.getAllGames()).toEqual([game1, game2]);
		}));

	});

	describe('#save(Game)', () => {
		it('should automatically assign an incrementing id', inject([GamesDataService], (service: GamesDataService) => {
			let game1 = new Game({title: 'Test 1', release_date: '1990-01-01', status: 0});
			let game2 = new Game({title: 'Test 2', release_date: '1990-01-01', status: 0});

			service.addGame(game1);
			service.addGame(game2);

			expect(service.getGameById(1)).toEqual(game1);
			expect(service.getGameById(2)).toEqual(game2);
		}));

	});

	describe('#deleteGameById(id)', () => {
		it('should remove Game with the corresponding id', inject([GamesDataService], (service: GamesDataService) => {
			let game1 = new Game({title: 'Test 1', release_date: '1990-01-01', status: 0});
			let game2 = new Game({title: 'Test 2', release_date: '1990-01-01', status: 0});

			service.addGame(game1);
			service.addGame(game2);

			expect(service.getAllGames()).toEqual([game1, game2]);

			service.deleteGameById(1);

			expect(service.getAllGames()).toEqual([game2]);

			service.deleteGameById(2);

			expect(service.getAllGames()).toEqual([]);
		}));

		it('should not removing anything if Game with corresponding id is not found', inject([GamesDataService], (service: GamesDataService) => {
			let game1 = new Game({title: 'Test 1', release_date: '1990-01-01', status: 0});
			let game2 = new Game({title: 'Test 2', release_date: '1990-01-01', status: 0});

			service.addGame(game1);
			service.addGame(game2);

			expect(service.getAllGames()).toEqual([game1, game2]);

			service.deleteGameById(3);

			expect(service.getAllGames()).toEqual([game1, game2]);
		}));

	});

	describe('#updateGameById(id, values)', () => {
		it('should return Game with the corresponding id and updated data', inject([GamesDataService], (service: GamesDataService) => {
			let game = new Game({title: 'Test', release_date: '1990-01-01', status: 0});

			service.addGame(game);

			let updatedGame = service.updateGameById(1, {
				title: 'new title'
			});

			expect(updatedGame.title).toEqual('new title');
		}));

		it('should return null if Game is not found', inject([GamesDataService], (service: GamesDataService) => {
			let game = new Game({title: 'Test', release_date: '1990-01-01', status: 0});

			service.addGame(game);

			let updatedGame = service.updateGameById(2, {
				title: 'new title'
			});

			expect(updatedGame).toEqual(null);
		}));

	});
});
