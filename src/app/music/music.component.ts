import { Component } from '@angular/core';
import { MusicKey } from './music.models';
import { MusicKeyService } from '../core/services/music-key.service';

@Component({
    selector: 'music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.css'],
    providers: [MusicKeyService]
})

export class MusicComonent {

    chromaticScaleSliderValue = '1';
    musicKey: MusicKey;
    renderingMajorKey = true;

    constructor(private musicKeyService: MusicKeyService) { }

    ngOnInit() {
        this.musicKey = this.musicKeyService.getMusicKey(this.chromaticScaleSliderValue);
    }

    getchromaticScaleValue(event: MouseEvent) {
        this.chromaticScaleSliderValue = event['target']['value'];
        this.musicKey = this.musicKeyService.getMusicKey(this.chromaticScaleSliderValue);
        console.log(this.musicKey);
    }

    getminorMajorValue() {
        this.renderingMajorKey = !this.renderingMajorKey;
    }
}
