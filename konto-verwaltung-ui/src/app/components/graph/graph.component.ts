import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {NgIf} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {CurrencyManagementService} from "../../services/currency-service/currency-management.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [
    CanvasJSAngularChartsModule,
    NgIf,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements OnInit, OnChanges {


  @Input() yTitle: string = ''
  @Input() xTitle: string = ''
  @Input() title: string = ''
  @Input() currency: boolean = false
  @Input() vibDataPoints: any[] = []
  @Input() vcbDataPoints: any[] = []
  @Input() paypalDataPoints: any[] = []
  input: string = ''
  rate: number = 0
  result: number = 0
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

  constructor(
    protected service: CurrencyManagementService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }

  ngOnInit(): void {
    if (this.currency) {
      this.rate = this.vcbDataPoints[this.vcbDataPoints.length - 1].y
      this.result = this.rate
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
            type: "spline",
            name: "VIB Rate",
            showInLegend: true,
            dataPoints: this.vibDataPoints,
            fontFamily: "sans-serif"
          },
          {
            type: "spline",
            name: "VCB Rate",
            showInLegend: true,
            dataPoints: this.vcbDataPoints,
            fontFamily: "sans-serif"
          },
          {
            type: "spline",
            name: 'Paypal Rate',
            showInLegend: true,
            dataPoints: this.paypalDataPoints,
            fontFamily: "sans-serif"
          }
        ]
      }
    } else {
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
            type: "spline",
            name: "VIB Rate",
            showInLegend: true,
            dataPoints: this.vibDataPoints,
            fontFamily: "sans-serif"
          }
        ]
      }
    }
  }

  filter(value: string) {
    this.filteringEvent.emit(value)
  }

  calculate() {
    try {
      const input = Number(this.input)
      if (input) {
        this.result = input * this.rate
      } else {
        this.result = this.rate
      }
    } catch (error) {
      this.result = this.rate
    }
  }
}
