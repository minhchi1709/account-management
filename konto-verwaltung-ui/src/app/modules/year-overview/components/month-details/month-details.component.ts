import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../../../../services/services/transaction.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {Transaction} from "../../../../services/models/transaction";
import {AppComponent} from "../../../../app.component";
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";
import {CurrencyControllerService} from "../../../../services/services/currency-controller.service";

@Component({
  selector: 'app-month-details',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    CanvasJSAngularChartsModule,
    NgIf
  ],
  templateUrl: './month-details.component.html',
  styleUrl: './month-details.component.scss'
})
export class MonthDetailsComponent implements OnInit {

  loaded: boolean = false
  factor: number = 1
  year: number = 0
  month: string = ''
  transactions: any[] = []
  sum: number = 0
  datas: any[] = []
  currentSum: number = 0
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
  };

  constructor(
    private transactionService: TransactionService,
    private router: ActivatedRoute,
    protected app: AppComponent,
    private currencyService: CurrencyControllerService
  ) {
  }

  ngOnInit(): void {
    this.year = Number(window.location.href.split('/')[4]);
    this.month = this.router.snapshot.params['month'];
    this.transactionService.getAllTransactionsOfMonth({
      year: this.year,
      month: this.app.monateDict[this.month]
    }).subscribe({
      next: res => {
        for (let i = 0 ; i < res.length ; i++) {
          this.transactions.push({
            transaction: res[i],
            included: false
          })
        }

        this.sum = this.app.sum(res)

        for (let i = 0; i < this.transactions.length ; i++) {
          const t = this.transactions[i].transaction
          this.datas.push({
            label: this.app.reformatDate(t.date || ''),
            y: t.value
          })
        }

        setTimeout(() => {
          this.chartOptions = {
            title: {
              text:  `Ausgeben und Einkommen im ${this.month}`
            },
            animationEnabled: true,
            axisX: {
              title: 'Datum'
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

    setTimeout(() => {
      let temp = window.location.href.split('/')
      if (temp.includes('months')) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active')
        })

        document.getElementById(String(this.year))?.classList.add('active')
        document.getElementById(String(this.month))?.classList.add('active')
      }
    }, 100)
  }

  protected readonly Math = Math;

  addToSum(index: number): void {
    this.transactions[index].included = true
    this.currentSum += this.transactions[index].transaction.value
  }

  removeFromSum(index: number): void {
    this.transactions[index].included = false
    this.currentSum -= this.transactions[index].transaction.value
  }

  protected readonly Array = Array;
}
