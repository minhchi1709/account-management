import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {TransactionService} from "../../../../api-services/services/transaction.service";
import {ActivatedRoute} from "@angular/router";
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {CurrencyService} from "../../../../api-services/services/currency.service";
import {CurrencyManagementService} from "../../../../services/currency-service/currency-management.service";
import {GraphComponent} from "../../../../components/graph/graph.component";
import {DateService} from "../../../../services/date-service/date.service";
import {ObserverService} from "../../../../services/observer/observer.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-year-details',
  standalone: true,
  imports: [
    NgForOf,
    CanvasJSAngularChartsModule,
    NgIf,
    GraphComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './year-details.component.html',
  styleUrl: './year-details.component.scss'
})
export class YearDetailsComponent implements OnInit{

  loaded: boolean = false
  rate: number = 1
  monate: string[] = []
  year: number = 0
  summe: number = 0
  dataPoints: any[] = []
  title: string = ''
  xTitle: string = ''
  yTitle: string = ''

  constructor(
    private transactionService: TransactionService,
    private router: ActivatedRoute,
    private currencyService: CurrencyService,
    protected currencyManagementService: CurrencyManagementService,
    protected dateSerivce: DateService,
    private observer: ObserverService
  ) {
  }

  ngOnInit(): void {
    this.year = this.router.snapshot.params['year'];
    this.init()
    this.observer.objectUpdate$.subscribe(object => {
      if (object) {
        this.init()
      }
    })
    this.title = 'Monatliche Analyse'
    this.xTitle = 'Monat'
    this.yTitle = '€'
    this.currencyService.getTodayVibCurrency().subscribe({
      next: val => {
        this.rate = val.rate || 0
      }
    })
  }

  init() {
    this.transactionService.getAllMonths({
      year: this.year
    }).subscribe({
      next: res => {
        this.transactionService.getAllMonthTotals({
          year: this.year
        }).subscribe({
          next: value => {
            this.summe = 0
            this.dataPoints = value.map((mt) => {
              return {
                label: this.dateSerivce.getMonthNameDE(this.capitalize(mt.month || '')),
                y: mt.total
              }
            })
            this.monate = value.map(mt => this.capitalize(mt.month || ''))
            value.map(mt => {
              return mt.total
            }).forEach(t => this.summe+= t || 0)
            this.loaded = true
          }
        })

        //setTimeout(() => this.loaded = true, 200)
      }
    })
  }

  private capitalize(input: string):string {
    let temp:string = input.toLowerCase()
    return temp.charAt(0).toUpperCase() + temp.slice(1);
  }

  protected readonly Math = Math;
}
