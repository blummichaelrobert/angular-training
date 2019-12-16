import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoggerService } from '../services/logger.service';
import { load } from '@angular/core/src/render3';

@Injectable()
export class ProloadModulesStrategy implements PreloadingStrategy {

    constructor(private logger: LoggerService) { }

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        const preload = 'preload';
        if (route.data && route.data[preload]) {
            this.logger.log('Preloaded: ' + route.path);
            return load();
        } else {
            return of (null);
        }
    }
}
