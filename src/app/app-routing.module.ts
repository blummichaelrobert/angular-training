import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [
   { path: 'customers/:id', data: { preload: true }, loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  // { path: 'customers/:id', data: { preload: true }, loadChildren: 'app/customer/customer.module#CustomerModule' },
  { path: 'customers', data: { preload: true }, loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  // { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
  { path: 'orders', data: { preload: true }, loadChildren: './orders/orders.module#OrdersModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'alphabet', loadChildren: './alphabet-invasion/alphabet-invasion.module#AlphabetInvasionModule' },
  {path: 'sandbox', loadChildren: './sandbox/sandbox.module#SandboxModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadModulesStrategy }) ],
  exports: [ RouterModule ],
  providers: [PreloadModulesStrategy]
})
export class AppRoutingModule { }
