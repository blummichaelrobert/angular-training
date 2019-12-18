import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { MockDataService } from '../shared/mocks';

@NgModule({
    imports: [CustomersRoutingModule, SharedModule],
    declarations: [CustomersRoutingModule.components],
    providers: [ MockDataService ]
  })
  export class CustomersModule { }
