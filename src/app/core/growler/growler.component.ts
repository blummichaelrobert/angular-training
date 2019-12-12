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
    // growlerService.growl = this.growl.bind(this);
  }

  ngOnInit() {
  }

}

class Growl {
  enabled: boolean;
  timeoutId: number;
}
