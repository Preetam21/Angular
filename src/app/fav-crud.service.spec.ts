import { TestBed, inject } from '@angular/core/testing';

import { FavCrudService } from './fav-crud.service';

describe('FavCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavCrudService]
    });
  });

  it('should be created', inject([FavCrudService], (service: FavCrudService) => {
    expect(service).toBeTruthy();
  }));
});
