import { TestBed } from '@angular/core/testing';

import { YuuShopFormService } from './yuu-shop-form.service';

describe('YuuShopFormService', () => {
  let service: YuuShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YuuShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
