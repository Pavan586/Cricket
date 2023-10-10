import { TestBed } from '@angular/core/testing';

import { ShowteamsService } from './showteams.service';

describe('ShowteamsService', () => {
  let service: ShowteamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowteamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
