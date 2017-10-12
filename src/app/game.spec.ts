import { Game } from './game';

describe('Game', () => {
	it('should create an instance', () => {
		expect(new Game()).toBeTruthy();
	});

	it('should accept values in the constructor', () => {
		let game = new Game({
			title: 'Test',
			release_date: '1990-01-01',
			status: 0
		});
		
		expect(game.title).toEqual('Test');
		expect(game.release_date).toEqual('1990-01-01');
		expect(game.status).toEqual(0);
	});
});
