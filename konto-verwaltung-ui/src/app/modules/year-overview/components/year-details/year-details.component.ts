import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {TransactionService} from "../../../../services/services/transaction.service";
import {ActivatedRoute} from "@angular/router";
import {AppComponent} from "../../../../app.component";
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {CurrencyControllerService} from "../../../../services/services/currency-controller.service";

@Component({
  selector: 'app-year-details',
  standalone: true,
  imports: [
    NgForOf,
    CanvasJSAngularChartsModule,
    NgIf
  ],
  templateUrl: './year-details.component.html',
  styleUrl: './year-details.component.scss'
})
export class YearDetailsComponent implements OnInit{

  loaded: boolean = false
  factor: number = 1
  monate: string[] = []
  year: number = 0
  summe: number = 0
  datas: any[] = []
  chartOptions:any = {
    title: {
      text: "Monatliches Ausgeben und Einkommen"
    },
    data: [{
      type: "line",
      dataPoints: [
        { label: "Start",  y: 0  }
      ]
    }]
  };

  constructor(
    private transactionService: TransactionService,
    private router: ActivatedRoute,
    protected app: AppComponent,
    private currencyService: CurrencyControllerService,
  ) {
  }

  ngOnInit(): void {
    this.year = this.router.snapshot.params['year'];
    this.transactionService.getAllMonths({
      year: this.year
    }).subscribe({
      next: res => {
        this.monate = res.map(val => this.capitalize(val))

        for (let i = 0 ; i < this.monate.length ; i++) {
          const monat = this.monate[i]
          this.transactionService.getAllTransactionsOfMonth({
            year: this.year,
            month: this.app.monateDict[monat]
          }).subscribe({
            next: res => {
              let temp = this.app.sum(res)
              this.datas.push({
                label: monat,
                y: temp
              })
              this.summe += temp
            }
          })
        }

        setTimeout(() => {
          this.chartOptions = {
            title: {
              text: "Monatliches Ausgeben und Einkommen"
            },
            animationEnabled: true,
            axisX: {
              title: 'Monat'
            },
            axisY: {
              title: '€'
            },
            data: [{
              type: "line",
              dataPoints: this.datas
            }]
          }
        }, 100)

        this.currencyService.get({
          url: 'https://wise.com/vn/currency-converter/eur-to-vnd-rate?amount=1'
        })
          .subscribe({
            next: res => {
              this.factor = res.value || 1
              this.loaded = true
            }
          })
      },
      error: err => console.log(err)
    })

  }

  private capitalize(input: string):string {
    let temp:string = input.toLowerCase()
    return temp.charAt(0).toUpperCase() + temp.slice(1);
  }

  protected readonly Math = Math;
}
