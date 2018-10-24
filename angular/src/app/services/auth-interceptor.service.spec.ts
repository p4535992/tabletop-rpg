import { TestBed, inject } from '@angular/core/testing';

import { AuthInterceptor } from './auth-interceptor.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';

describe('AuthInterceptor', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule
      ],
      providers: [
        AuthInterceptor,
      ]
    });
  });

  it('should be created', inject([AuthInterceptor, MatSnackBar], (service: AuthInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
