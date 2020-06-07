import { Component, OnInit} from '@angular/core';
import { interval, fromEvent, combineLatest, BehaviorSubject } from 'rxjs';
import { scan, startWith, map, takeWhile, switchMap } from 'rxjs/operators';
import { State, Letter, Letters } from './alphabet-invasion.interfaces';

@Component({
    selector: 'alphabet-invasion',
    templateUrl: './alphabet-invasion.component.html'
})

export class AlphabetInvasionComponent {
    intervalSubject = new BehaviorSubject(600);

    // everytime a key is pressed in the document emit the key as that event.
    keys$ = fromEvent(document, 'keydown').pipe(startWith({key: ''}), map((e: KeyboardEvent) => e.key));

    private randomLetter = () => String.fromCharCode(Math.random() * ('z'.charCodeAt(0) - 'a'.charCodeAt(0)) + 'a'.charCodeAt(0));

    private levelChangedThreshold: number;
    private speedAdjust: number;
    private endThreshold: number;
    private gameWidth: number;

}
