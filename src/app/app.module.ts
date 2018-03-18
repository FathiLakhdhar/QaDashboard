import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {NgxChartsModule} from '@swimlane/ngx-charts';
import { AppComponent } from './app.component';

import {NgDashboardModule, DashboardComponent, WidgetComponent} from 'ngx-dashboard';
import { BarWidgetComponent } from './widgets/bar.widget.component';


@NgModule({
  declarations: [
    AppComponent,
    BarWidgetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    NgDashboardModule
  ],
  entryComponents: [
    WidgetComponent,
    BarWidgetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
