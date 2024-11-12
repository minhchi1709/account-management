import {Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {NgIf} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [
    CanvasJSAngularChartsModule,
    NgIf,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements OnInit, OnChanges {

  yTitle: string = ''
  xTitle: string = ''
  title: string = ''
  currency: boolean = false
  dataPoints1: any[] = []
  dataPoints2: any[] = []
  @Output() filteringEvent = new EventEmitter<string>()
  chartOptions:any = {
    title: {
      text: "Ausgeben und Einkommen"
    },
    data: [{
      type: "line",
      dataPoints: [
        { label: "Start",  y: 0  }
      ]
    }]
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }
  ngOnInit(): void {
    this.chartOptions = {
      title: {
        text: this.title,
        fontFamily: "sans-serif",
        fontWeight: "bold"
      },
      animationEnabled: true,
      axisX: {
        title: this.xTitle,
        fontFamily: "sans-serif"
      },
      axisY: {
        fontFamily: "sans-serif",
        suffix: ` ${this.yTitle}`
      },
      toolTip: {
        shared: true
      },
      data: [
        {
          type: "line",
          name: "VIB Rate",
          showInLegend: true,
          dataPoints: this.dataPoints1,
          fontFamily: "sans-serif"
        },
        {
          type: "line",
          name: 'Paypal Rate',
          showInLegend: true,
          dataPoints: this.dataPoints2,
          fontFamily: "sans-serif"
        }
      ]
    }
  }

  filter(value: string) {
    this.filteringEvent.emit(value)
  }

  @Input()
  set setTitle(title: string) {
    this.title = title
  }

  @Input()
  set setData1(data: any[]) {
    this.dataPoints1 = data
  }

  @Input()
  set setData2(data: any[]) {
    this.dataPoints2 = data
  }

  @Input()
  set setXTitle(title: string) {
    this.xTitle = title
  }

  @Input()
  set setYTitle(title: string) {
    this.yTitle = title
  }

  @Input()
  set setCurrency(currency: boolean) {
    this.currency = currency
  }
}
