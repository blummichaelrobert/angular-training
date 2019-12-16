import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  // displayMode: CustomerDisplayModeEnum;
  // displayModeEnum = CustomerDisplayModeEnum;
  constructor() { }

  ngOnInit() {
    // No longer needed due to routerLinkActive feature in Angular
      // const path = this.router.url.split('/')[3];
      // switch (path) {
      //   case 'details':
      //     this.displayMode = CustomerDisplayModeEnum.Details;
      //     break;
      //   case 'orders':
      //     this.displayMode = CustomerDisplayModeEnum.Orders;
      //     break;
      //   case 'edit':
      //     this.displayMode = CustomerDisplayModeEnum.Edit;
      //     break;
      // }
  }

}

// enum CustomerDisplayModeEnum {
//   Details=0,
//   Orders=1,
//   Edit=2
// }
