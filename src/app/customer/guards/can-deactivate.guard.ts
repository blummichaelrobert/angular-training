import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CustomerEditComponent } from '../customer-edit/customer-edit.component';
import { LoggerService } from '../../core/services/logger.service';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CustomerEditComponent> {
    canDeactivate(
        component: CustomerEditComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<boolean> | Promise<boolean> | boolean {
        throw new Error("Method not implemented.");
    }
}
