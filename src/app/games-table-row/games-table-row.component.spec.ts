import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesTableRowComponent } from './games-table-row.component';

describe('GamesTableRowComponent', () => {
  let component: GamesTableRowComponent;
  let fixture: ComponentFixture<GamesTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
