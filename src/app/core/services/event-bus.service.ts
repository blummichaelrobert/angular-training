import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class EventBusService { }

export class EmitEvent {
    constructor(public name: any, public value?: any) { }
}

export enum Events {
    httpRequest,
    httpResponse
}
