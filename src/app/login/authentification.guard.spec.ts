import {TestBed} from '@angular/core/testing';

import {AuthentificationGuard} from './authentification.guard';

describe('AuthenticationGuard', () => {
  let guard: AuthentificationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthentificationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
