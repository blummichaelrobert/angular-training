import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MusicComonent } from './music.component';

const routes: Routes = [{ path: '', component: MusicComonent }];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [MusicComonent]
})

export class MusicModule { }
