import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { GamesDataService } from './games-data.service';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule
			],
			declarations: [
				AppComponent
			],
			providers: [
				GamesDataService,
				{
					provide: ApiService,
					useClass: ApiMockService
				}
			],
			schemas: [
				NO_ERRORS_SCHEMA
			]
		}).compileComponents();
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app).toBeTruthy();
	}));
});
