import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBusService, Events } from '../services/event-bus.service';

@Component({
  selector: 'cm-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit, OnDestroy {

  httpRequestSub: Subscription;
  httpResponseSub: Subscription;
  enabled = false;
  queue = [];
  timerId: number = null;
  timerHideId: number = null;

  @Input() delay = 500;

  constructor(private eventBus: EventBusService) { }

  ngOnInit() {
    // Handle Request
    this.httpRequestSub = this.eventBus.on(Events.httpRequest, (() => {
      this.queue.push({});
      if (this.queue.length === 1) {
        // Only show if we have an item in the queue after the delay time
        setTimeout(() => { if (this.queue.length) { this.enabled = true; } }, this.delay);
      }
    }));

    // Handle Response
    this.httpResponseSub = this.eventBus.on(Events.httpResponse, (() => {
      this.queue.pop();
      if (this.queue.length === 0) {
        setTimeout(() => { if (this.queue.length === 0) { this.enabled = false; } }, this.delay);
      }
    }));
  }

  ngOnDestroy(): void {
    this.httpRequestSub.unsubscribe();
    this.httpResponseSub.unsubscribe();
  }

}
