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

    login(userLogin: IUserLogin): Observable<boolean> {
        return this.http.post<boolean>(this.authUrl + '/login', userLogin)
        .pipe(map(loggedIn => {
            this.isAuthenticatd = loggedIn;
            this.userAuthChanged(loggedIn);
            return loggedIn;
        }),
        catchError(this.handleError));
    }

    logout(): Observable<boolean> {
        return this.http.post<boolean>(this.authUrl + '/logout', null)
        .pipe(map(loggedOut => {
            this.isAuthenticatd = !loggedOut;
            this.userAuthChanged(!loggedOut); // Return loggedin status
            return loggedOut;
        }),
        catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Server error');
    }

}
