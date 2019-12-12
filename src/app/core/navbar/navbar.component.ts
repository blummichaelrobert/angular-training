import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { GrowlerService, GrowlerMessageType } from '../growler/growler.service';
import { LoggerService } from '../services/logger.service';

@Component({
    selector: 'cm-navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit, OnDestroy {

    isCollapsed: boolean;
    loginLogoutText = 'Login';
    sub: Subscription;

    constructor(private router: Router,
                private authService: AuthService,
                private growler: GrowlerService,
                private logger: LoggerService) { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
    

}
