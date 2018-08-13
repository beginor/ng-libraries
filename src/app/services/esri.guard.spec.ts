import { TestBed, async, inject } from '@angular/core/testing';

import { EsriGuard } from './esri.guard';

describe('EsriGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EsriGuard]
    });
  });

  it('should ...', inject([EsriGuard], (guard: EsriGuard) => {
    expect(guard).toBeTruthy();
  }));
});
