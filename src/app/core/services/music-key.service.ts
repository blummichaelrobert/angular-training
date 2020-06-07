import { Injectable } from '@angular/core';
import { MusicKey } from '../../music/music.models';

@Injectable()
export class MusicKeyService {

    musicMap: Map<string, string[]> = new Map([
        ['1', ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']],
        ['2', ['A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A']],
        ['3', ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#']],
        ['4', ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']],
        ['5', ['C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C']],
        ['6', ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#']],
        ['7', ['D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D']],
        ['8', ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#']],
        ['9', ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']],
        ['10', ['F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F']],
        ['11', ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#']],
        ['12', ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G']]
    ]);

    colorMap: Map<string, string> = new Map([
        ['A', '#ff0000'],
        ['A#', '#ff3300'],
        ['B', '#ff6500'],
        ['C', '#f9ed03'],
        ['C#', '#b6f903'],
        ['D', '#059c0e'],
        ['D#', '#04d67b'],
        ['E', '#00e6c2'],
        ['F', '#0000ff'],
        ['F#', '#5a01ff'],
        ['G', '#ab00ff'],
        ['G#', '#e6008e']
    ]);

    musicKey: MusicKey;

    createMusicKey(rawMusicKey: string[]) {
        this.musicKey = {
            Root: rawMusicKey[0],
            minor2nd: rawMusicKey[1],
            Major2nd: rawMusicKey[2],
            minor3rd: rawMusicKey[3],
            Major3rd: rawMusicKey[4],
            Perfect4th: rawMusicKey[5],
            diminished5th: rawMusicKey[6],
            Perfect5th: rawMusicKey[7],
            minor6th: rawMusicKey[8],
            Major6th: rawMusicKey[9],
            minor7th: rawMusicKey[10],
            Major7th: rawMusicKey[11]
        };
    }

    getMusicKey(key: string): MusicKey {

        const rawMusicKey: string[] = this.musicMap.get(key);

        this.createMusicKey(rawMusicKey);

        return this.musicKey;
    }

    getColor(key: string): string {
        return this.colorMap.get(key);
    }
}
