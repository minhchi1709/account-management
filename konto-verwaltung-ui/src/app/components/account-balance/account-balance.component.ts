import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../../services/services/transaction.service";
import {AppComponent} from "../../app.component";
import {CreateTransactionComponent} from "../create-transaction/create-transaction.component";
import {CanvasJSAngularChartsModule} from "@canvasjs/angular-charts";

import {CurrencyControllerService} from "../../services/services/currency-controller.service";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-account-balance',
  standalone: true,
  imports: [
    CreateTransactionComponent,
    CanvasJSAngularChartsModule,
    NgIf
  ],
  templateUrl: './account-balance.component.html',
  styleUrl: './account-balance.component.scss'
})
export class AccountBalanceComponent implements OnInit{

  loaded: boolean = false
  balance: number = 0
  factor: number = 1
  datas: any[] = []
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
    protected app: AppComponent,
    private currencyService: CurrencyControllerService
  ) {
  }

  ngOnInit(): void {
    this.transactionService.getAllTransactions1().subscribe({
      next: val => this.balance = this.app.sum(val)
    })
    this.transactionService.getAllYears().subscribe({
      next: val => {
        for (let y of val.reverse()) {
          this.transactionService.getAllTransactionsOfYear({
            year: y
          }).subscribe({
            next: transactions => {
              this.datas.push({
                label: y,
                y: this.app.sum(transactions)
              })
            }
          })
        }
      }
    })

    setTimeout(() => {
      this.chartOptions = {
        title: {
          text:  `Jährliches Ausgeben und Einkommen`
        },
        animationEnabled: true,
        axisX: {
          title: 'Jahr'
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
          console.log(res.value)
        }
      })


  }

  protected readonly Math = Math;
}
