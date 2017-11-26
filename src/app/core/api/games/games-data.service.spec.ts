import { inject, TestBed } from '@angular/core/testing';

import { ApiServiceMock } from '../api.service.mock';
import { ApiService } from '../api.service';
import { GamesDataService } from './games-data.service';

describe('GamesServiceService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				GamesDataService,
				{
					provide: ApiService,
					useClass: ApiServiceMock
				}
			]
		});
	});

	it('should be created', inject([GamesDataService], (service: GamesDataService) => {
		expect(service).toBeTruthy();
	}));
});
