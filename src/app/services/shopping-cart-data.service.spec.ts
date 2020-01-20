import { TestBed } from '@angular/core/testing';

import { ShoppingCartDataService } from './shopping-cart-data.service';

describe('ShoppingCartDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingCartDataService = TestBed.get(ShoppingCartDataService);
    expect(service).toBeTruthy();
  });
});
