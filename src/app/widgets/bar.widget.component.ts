
import {Component, Renderer2, ElementRef, forwardRef, Input, ViewChild} from "@angular/core";
import {WidgetHandleDirective, WidgetComponent} from "ngx-dashboard";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

const forwardReference = forwardRef(() => BarWidgetComponent);

@Component({
  selector: 'bar-vertival-widget',
  templateUrl: './bar.widget.component.html',
  styleUrls: [],
  providers: [{provide: WidgetComponent, useExisting: forwardReference}]
})
export class BarWidgetComponent extends WidgetComponent implements OnInit{
  @Input() public size: number[] = [2, 2];
  @Input() public widgetId: string;
  @ViewChild(WidgetHandleDirective) protected _handle: WidgetHandleDirective;

  single: any[]=  [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];
  multi: any[]= [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];
  

  view: Number[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(ngEl: ElementRef, renderer: Renderer2) {
    super(ngEl, renderer);
  }


  onSelect(event) {
    console.log(event);
  }
}