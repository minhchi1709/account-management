import { Component, OnInit} from '@angular/core';
import {TransactionService} from "../../api-services/services/transaction.service";
import {CreateTransactionComponent} from "../create-transaction/create-transaction.component";

import {NgIf} from "@angular/common";
import {CurrencyService} from "../../api-services/services/currency.service";
import {GraphComponent} from "../graph/graph.component";
import {CurrencyManagementService} from "../../services/currency-service/currency-management.service";
import {ObserverService} from "../../services/observer/observer.service";
import {LoaderComponent} from "../loader/loader.component";
import {firstValueFrom} from "rxjs";


@Component({
  selector: 'app-account-balance',
  standalone: true,
  imports: [
    CreateTransactionComponent,
    NgIf,
    GraphComponent,
    LoaderComponent
  ],
  templateUrl: './account-balance.component.html',
  styleUrl: './account-balance.component.scss'
})
export class AccountBalanceComponent implements OnInit{

  loaded: boolean = false
  balance: number = 0
  rate: number = 0
  dataPoints: any[] = []
  title: string = ''
  xTitle: string = ''
  yTitle: string = ''

  constructor(
    private transactionService: TransactionService,
    private currencyService: CurrencyService,
    protected currencyManagementService: CurrencyManagementService,
    private observer: ObserverService
  ) {
  }

  ngOnInit(): void {
    this.observer.objectUpdate$.subscribe(object => {
      if (object) {
        this.init()
      }
    })
    this.init()
    this.title = 'Jährliche Analyse'
    this.xTitle = 'Jahr'
    this.yTitle = '€'

    this.currencyService.getTodayRate({
      bank: 'vib'
    }).subscribe({
      next: val => {
        this.rate = val.rate || 0
        //setTimeout(() => this.loaded = true, 10)
        this.loaded = true
      }
    })
  }

  init() {
    this.transactionService.getAllYears().subscribe({
      next: val => {
        for (let y of val.reverse()) {
          this.transactionService.getAllTransactionsOfYear({
            year: y
          }).subscribe({
            next: transactions => {
              this.dataPoints.push({
                label: y,
                y: this.currencyManagementService.sum(transactions)
              })
            }
          })
        }
      }
    })
    console.log(this.dataPoints)
    this.transactionService.getAllTransactions().subscribe({
      next: val => this.balance = this.currencyManagementService.sum(val)
    })
  }

  protected readonly Math = Math;
}
