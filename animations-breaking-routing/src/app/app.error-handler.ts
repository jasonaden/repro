import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
  ) { }

  handleError(err: any) {
    console.log(err);

    const router = this.injector.get(Router);
    router.navigate(['/alpha/gamma']);
  }
}