import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { CustTabsComponent } from './cust-tabs/cust-tabs.component';
import { MulltiTabsComponent } from './mullti-tabs/mullti-tabs.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cust-tabs', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'cust-tabs', component: CustTabsComponent, data: { text: 'Cust_tabs' } },
  { path: 'mullti-tabs', component: MulltiTabsComponent, data: { text: 'Mullti tabs' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
