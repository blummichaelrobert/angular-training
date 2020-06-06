import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandboxComponent } from './sandbox.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: SandboxComponent }];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    declarations: [SandboxComponent]
})

export class SandboxModule { }
