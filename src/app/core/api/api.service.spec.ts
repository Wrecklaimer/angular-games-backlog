import { TestBed, inject } from '@angular/core/testing';
import { BaseRequestOptions, Http, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientModule,
				HttpClientTestingModule
			],
			providers: [
				ApiService
			]
		});
	});

	it('should be created', inject([ApiService], (service: ApiService) => {
		expect(service).toBeTruthy();
	}));
});
