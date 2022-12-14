import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustTabsComponent } from './cust-tabs/cust-tabs.component';
import { IgxTreeModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule, IgxDatePickerModule, IgxTabsModule, IgxGridModule, IgxCalendarModule, IgxNavbarModule } from '@infragistics/igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';
import { MulltiTabsComponent } from './mullti-tabs/mullti-tabs.component';
import { DefaultTabComponent } from './default-tab/default-tab.component';
import { IconTabComponent } from './icon-tab/icon-tab.component';
import { AllTabsComponent } from './all-tabs/all-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    CustTabsComponent,
    MulltiTabsComponent,
    DefaultTabComponent,
    IconTabComponent,
    AllTabsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxTreeModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxDatePickerModule,
    IgxTabsModule,
    IgxGridModule,
    IgxCategoryChartModule,
    FormsModule,
    IgxCalendarModule,
    IgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
