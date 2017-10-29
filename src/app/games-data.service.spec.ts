import { inject, TestBed } from '@angular/core/testing';

import { ApiMockService } from './api-mock.service';
import { ApiService } from './api.service';
import { GamesDataService } from './games-data.service';

describe('GamesServiceService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				GamesDataService,
				{
					provide: ApiService,
					useClass: ApiMockService
				}
			]
		});
	});

	it('should be created', inject([GamesDataService], (service: GamesDataService) => {
		expect(service).toBeTruthy();
	}));
});
