import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GrowlerService, GrowlerMessageType } from './growler.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'cm-growler',
  templateUrl: './growler.component.html',
  styleUrls: ['./growler.component.css']
})
export class GrowlerComponent implements OnInit {

  private growlCount = 0;
  growls: Growl[] = [];

  @Input() position = 'bottom-right';
  @Input() timeout = 3000;

  constructor(private growlerService: GrowlerService,
              private logger: LoggerService
             ) {
     growlerService.growl = this.growl.bind(this);
  }

  ngOnInit() { }

  /**
  * Displays a growl message.
  *
  * @param {string} message - The message to display.
  * @param {GrowlMessageType} growlType - The type of message to display (a GrowlMessageType enumeration)
  * @return {number} id - Returns the ID for the generated growl
  */

  growl(message: string, growlType: GrowlerMessageType): number {
    this.growlCount++;
    const bootstrapAlertType = GrowlerMessageType[growlType].toLocaleLowerCase();
    const messageType = `alert-${ bootstrapAlertType }`;

    const growl = new Growl(this.growlCount, message, messageType, this.timeout, this);
    this.growls.push(growl);
    return growl.id;
  }

  removeGrowl(id: number) {
    this.growls.forEach((growl: Growl, index: number) => {
      if (growl.id === id) {
        this.growls.splice(index, 1);
        this.growlCount--;
        this.logger.log('removed' + id);
      }
    });
  }
}

class Growl {
  enabled: boolean;
  timeoutId: number;

  constructor(public id: number,
              public message: string,
              public messageType: string,
              private timeout: number,
              private growlerContainer: GrowlerComponent) {

    this.show();
  }

  show() {
    window.setTimeout(() => {
      this.hide();
    }, this.timeout);
  }

  hide() {
    this.enabled = false;
    window.setTimeout(() => {
      this.growlerContainer.removeGrowl(this.id);
    }, this.timeout);
  }
}
