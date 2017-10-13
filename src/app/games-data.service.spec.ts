import { TestBed, inject } from '@angular/core/testing';

import { GamesDataService } from './games-data.service';
import { ApiService } from './api.service';
import { ApiMockService }  from './api-mock.service';

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
