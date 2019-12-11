import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { SharedComponent } from './shared/shared.component';
import { GrowlerComponent } from './core/growler/growler.component';
import { ModalComponent } from './core/modal/modal.component';
import { OverlayComponent } from './core/overlay/overlay.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerOrdersComponent } from './customer/customer-orders/customer-orders.component';
import { FilterTextboxComponent } from './shared/filter-textbox/filter-textbox.component';
import { MapComponent } from './shared/map/map.component';
import { PaginationComponent } from './shared/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CustomerComponent,
    CustomersComponent,
    LoginComponent,
    OrdersComponent,
    SharedComponent,
    GrowlerComponent,
    ModalComponent,
    OverlayComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    CustomerOrdersComponent,
    FilterTextboxComponent,
    MapComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
