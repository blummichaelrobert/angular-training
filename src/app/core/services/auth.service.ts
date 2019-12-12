import { Injectable, Output, EventEmitter, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IUserLogin } from '../../shared/interfaces';

@Injectable()
export class AuthService {

    port = (this.window.location.port) ? ':' + this.window.location.port : '';
    baseUrl = `${this.window.location.protocol}//${this.window.location.hostname}${this.port}`;
    authUrl = this.baseUrl + '/api/auth';
    isAuthenticatd = false;
    redirectUrl: string;

    @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    // TODO: look up what @Inject is.
    constructor(private http: HttpClient, @Inject('Window') private window: Window) { }

    private userAuthChanged(status: boolean) {
        this.authChanged.emit(status);
    }

}
