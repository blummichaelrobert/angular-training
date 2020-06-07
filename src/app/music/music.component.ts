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

    backgroundColors: MusicKey;
    chromaticScaleSliderValue = '1';
    musicKey: MusicKey;
    renderingMajorKey = true;
    showChromaticScale = true;

    constructor(private musicKeyService: MusicKeyService) { }

    ngOnInit() {
        this.musicKey = this.musicKeyService.getMusicKey(this.chromaticScaleSliderValue);
        this.updateBackgroundColors();
    }

    getchromaticScaleValue(event: MouseEvent) {
        this.chromaticScaleSliderValue = event['target']['value'];
        this.musicKey = this.musicKeyService.getMusicKey(this.chromaticScaleSliderValue);
        this.updateBackgroundColors();
    }

    getminorMajorValue() {
        this.renderingMajorKey = !this.renderingMajorKey;
    }

    handleClick() {
        this.showChromaticScale = !this.showChromaticScale;
    }

    updateBackgroundColors() {
        // shallow vs deep copy: https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
        this.backgroundColors = { ...this.musicKey };
        
        // iterate over enumerable properties of object
        for (const interval in this.backgroundColors) {
            this.backgroundColors[interval] = this.musicKeyService.getColor(this.backgroundColors[interval]);          
        }
    }
}
