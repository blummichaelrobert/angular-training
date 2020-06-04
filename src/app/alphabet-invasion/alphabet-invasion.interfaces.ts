export interface Letter {
    letter: string;
    yPos: number;
}

export interface Letters {
    letters: Letter [];
    interval: number;
}

export interface State {
    score: number;
    letters: Letter[];
    level: number;
}