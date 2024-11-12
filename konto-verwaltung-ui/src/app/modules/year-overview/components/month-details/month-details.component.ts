import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TransactionService} from "../../../../api-services/services/transaction.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {CurrencyManagementService} from "../../../../services/currency-service/currency-management.service";
import {CurrencyService} from "../../../../api-services/services/currency.service";
import {DateService} from "../../../../services/date-service/date.service";
import {GraphComponent} from "../../../../components/graph/graph.component";
import {ObserverService} from "../../../../services/observer/observer.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {Transaction} from "../../../../api-services/models/transaction";


@Component({
  selector: 'app-month-details',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf,
    GraphComponent,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './month-details.component.html',
  styleUrl: './month-details.component.scss'
})
export class MonthDetailsComponent implements OnInit, OnChanges {

  loaded: boolean = false
  rate: number = 1
  year: number = 0
  month: string = ''
  transactions: any[] = []
  indexes: number[] = []
  sum: number = 0
  dataPoints: any[] = []
  currentSum: number = 0
  title: string = ''
  xTitle: string = ''
  yTitle: string = ''

  constructor(
    private transactionService: TransactionService,
    private router: ActivatedRoute,
    protected dateService: DateService,
    private currencyService: CurrencyService,
    protected currencyManagementService: CurrencyManagementService,
    private observer: ObserverService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
        console.log('change')
    }

  ngOnInit(): void {

    this.observer.objectUpdate$.subscribe(object => {
      if (object) {
        this.init()
      }
    })
    this.currencyService.getTodayVibCurrency().subscribe({
      next: val => {
        this.rate = val.rate || 0
      }
    })
    this.year = Number(window.location.href.split('/')[4]);
    this.month = this.router.snapshot.params['month'];
    this.init()

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

  init() {
    this.transactionService.getAllTransactionsOfMonth({
      year: this.year,
      month: this.dateService.getMonthValue(this.month)
    }).subscribe({
      next: res => {
        this.transactions = res.map(t => {
          return {
            transaction: t,
            included: false
          }
        })
        this.transactions = this.transactions.reverse()

        this.sum = this.currencyManagementService.sum(res)

        this.dataPoints = res.map(t => {
          return {
            label: this.dateService.reformatDate(t.date || ''),
            y: t.value
          }
        })

        this.title = `Analyse im ${this.month}`
        this.xTitle = 'Datum'
        this.yTitle = '€'

        setTimeout(() => this.loaded = true, 200)
      },
      error: err => console.log(err)
    })
  }
  protected readonly Math = Math;

  addToSum(index: number): void {
    this.transactions[index].included = true
    this.currentSum += this.transactions[index].transaction.value
    this.indexes.push(index)
  }

  removeFromSum(index: number): void {
    this.transactions[index].included = false
    this.currentSum -= this.transactions[index].transaction.value
    this.indexes = this.indexes.filter(i => i != index)
  }

  protected readonly Array = Array;

  editTransaction(transaction: any) {
    this.observer.detailNotify({
      type: 'update',
      object: transaction.transaction
    })

  }

  deleteTransaction(transaction: any) {
    this.transactionService.deleteTransaction({
      id: transaction.transaction.id || 0
    }).subscribe({
      next: () => {
        this.observer.updateNotify(transaction)
      }
    })
  }
}
