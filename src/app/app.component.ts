import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ViewChild } from '@angular/core';
import { DashboardComponent, WidgetComponent } from 'ngx-dashboard';
import { BarWidgetComponent } from './widgets/bar.widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': '_onResize($event)',
  }
})
export class AppComponent implements OnInit{
  title = 'app';
  @ViewChild(DashboardComponent) dashboard: DashboardComponent;
  widgetsSize: number[] = [200, 200];
  dashboardMargin: number = 10;
  
  ngOnInit(): void {
    this._onResize(null)
  }

  private _onResize(event: any) {
    if (window.innerWidth < 750) {
      this.dashboardMargin = 10;
      this.widgetsSize = [this.dashboard.width / 2 - this.dashboardMargin, this.widgetsSize[1]];
    }
    else {
      //this.dashboardMargin = 20;
      const nbColumn = Math.floor(this.dashboard.width / (this.widgetsSize[0] + this.dashboardMargin));
      this.widgetsSize = [this.dashboard.width / nbColumn - this.dashboardMargin, this.widgetsSize[1]];
    }
  }

  log(widget: WidgetComponent, type: string) {
    console.log(widget, type);
  }

  logOrder(order: Array<string>) {
    console.log(order, 'orderchange');
  }

  addWidget() {
    const ref: BarWidgetComponent = this.dashboard.addItem(BarWidgetComponent);
    ref.widgetId = Math.random() + '';
    ref.setSize([2,1]);
    console.log(ref.handle)
  }

  close(e: any, id: string) {
    this.dashboard.removeItemById(id);
    e.preventDefault();
    e.stopPropagation();
}
}
