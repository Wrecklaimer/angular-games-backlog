import { ActivatedRoute, Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

const fakeActivatedRoute = {
	snapshot: { data: { } }
} as ActivatedRoute;

class RouterStub {
	navigateByUrl(url: string) {
		return url;
	}
}

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [],
			declarations: [AppComponent],
			providers: [
				{provide: Router, useClass: RouterStub},
				{ provide: ActivatedRoute, useValue: fakeActivatedRoute }
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
