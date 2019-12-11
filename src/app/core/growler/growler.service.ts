import { Injectable } from '@angular/core';

@Injectable()
export class GrowlerService {
    constructor() { }
    // TODO: what is this syntax?
    growl: (message: string, growlType: GrowlerMessageType) => number;
}

export enum GrowlerMessageType {
    Success,
    Danger,
    Warning,
    Info
}
