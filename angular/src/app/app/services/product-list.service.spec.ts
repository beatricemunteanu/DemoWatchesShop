import { TestBed } from '@angular/core/testing';

import { ProductListService } from './product-list.service';

describe('ProductService', () => {
  let service: ProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
