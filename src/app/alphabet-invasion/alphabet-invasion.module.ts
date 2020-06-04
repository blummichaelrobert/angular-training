import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlphabetInvasionComponent } from './alphabet-invasion.component';

const routes: Routes = [{path: '', component: AlphabetInvasionComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [AlphabetInvasionComponent]
})

export class AlphabetInvasionModule { }
