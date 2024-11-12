import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../../../api-services/services/currency.service";
import {DateService} from "../../../../services/date-service/date.service";
import {GraphComponent} from "../../../../components/graph/graph.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-currency-exchange',
  standalone: true,
  imports: [
    GraphComponent,
    MatProgressSpinner,
    NgIf
  ],
  templateUrl: './currency-exchange.component.html',
  styleUrl: './currency-exchange.component.scss'
})
export class CurrencyExchangeComponent implements OnInit{
  title: string = 'Geldwechselsrate von EUR zu VND'
  VIBDataPoints: any[] = []
  filteredVIBDataPoints: any[] = []
  paypalDataPoints: any[] = []
  filteredPaypalDataPoints: any[] = []
  xTitle: string = 'Datum'
  yTitle: string = 'VND'
  loaded: boolean = false

  titles: any = {
    none: 'Geldwechselsrate von EUR zu VND',
    week: 'Geldwechselsrate von EUR zu VND innerhalb 7 Tagen',
    month: 'Geldwechselsrate von EUR zu VND dieses Monats',
    '3months': 'Geldwechselsrate von EUR zu VND in letzten 3 Monaten',
    '6months': 'Geldwechselsrate von EUR zu VND in letzten 6 Monaten',
    '9months': 'Geldwechselsrate von EUR zu VND in letzten 9 Monaten',
    year: 'Geldwechselsrate von EUR zu VND in diesem Jahr'
  }

  constructor(
    private currencyService: CurrencyService,
    private dateService: DateService
  ) {
  }

  ngOnInit(): void {

    this.currencyService.getAllRates().subscribe({
      next: value => {
        this.paypalDataPoints = value
        this.filteredPaypalDataPoints = this.paypalDataPoints.map(rate => {
          return {
            label: this.dateService.reformatDate(rate.date || ''),
            y: rate.rate
          }
        })

        this.currencyService.getAllVibRates().subscribe({
          next: value => {
            this.VIBDataPoints = value
            this.filteredVIBDataPoints = this.VIBDataPoints.map(rate => {
              return {
                label: this.dateService.reformatDate(rate.date || ''),
                y: rate.rate
              }
            })
            this.loaded = true
          }
        })
      }
    })
  }

  filter(option: string) {
    this.title = this.titles[option]
    if (option == 'none') {
      this.filteredPaypalDataPoints = this.paypalDataPoints.map(rate => {
        return {
          label: this.dateService.reformatDate(rate.date || ''),
          y: rate.rate
        }
      })
      this.filteredVIBDataPoints = this.VIBDataPoints.map(rate => {
        return {
          label: this.dateService.reformatDate(rate.date || ''),
          y: rate.rate
        }
      })

    } else {
      const begin = this.dateService.getDate(option) || new Date()

      this.filteredPaypalDataPoints = this.paypalDataPoints.slice().filter(p => new Date(p.date) >= begin).map(rate => {
        return {
          label: this.dateService.reformatDate(rate.date || ''),
          y: rate.rate
        }
      })
      this.filteredVIBDataPoints = this.VIBDataPoints.slice().filter(p => new Date(p.date) >= begin).map(rate => {
        return {
          label: this.dateService.reformatDate(rate.date || ''),
          y: rate.rate
        }
      })
    }
  }

}
