import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../../../api-services/services/currency.service";
import {DateService} from "../../../../services/date-service/date.service";
import {GraphComponent} from "../../../../components/graph/graph.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgIf} from "@angular/common";
import {LoaderComponent} from "../../../../components/loader/loader.component";

@Component({
  selector: 'app-currency-exchange',
  standalone: true,
  imports: [
    GraphComponent,
    MatProgressSpinner,
    NgIf,
    LoaderComponent
  ],
  templateUrl: './currency-exchange.component.html',
  styleUrl: './currency-exchange.component.scss'
})
export class CurrencyExchangeComponent implements OnInit{
  title: string = 'Geldwechselsrate von EUR zu VND'
  vibDataPoints: any[] = []
  filteredVIBDataPoints: any[] = []
  paypalDataPoints: any[] = []
  filteredPaypalDataPoints: any[] = []
  vcbDataPoints: any[] = []
  filteredVCBDataPoints: any[] = []
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
        this.paypalDataPoints = value.paypalRates || []
        this.filteredPaypalDataPoints = this.paypalDataPoints.map(rate => {
          return {
            label: this.dateService.reformatDate(rate.id.date || ''),
            y: rate.rate
          }
        })

        this.vibDataPoints = value.vibRates || []
        this.filteredVIBDataPoints = this.vibDataPoints.map(rate => {
          return {
            label: this.dateService.reformatDate(rate.id.date || ''),
            y: rate.rate
          }
        })

        this.vcbDataPoints = value.vcbRates || []
        this.filteredVCBDataPoints = this.vcbDataPoints.map(rate => {
          return {
            label: this.dateService.reformatDate(rate.id.date || ''),
            y: rate.rate
          }
        })

        let temp = this.vcbDataPoints.slice().filter(r1 => {
          for (let r2 of this.vibDataPoints) {
            if (r2.id.date == r1.id.date) {
              return false
            }
          }
          return true
        })
        this.loaded = true
      }
    })
  }

  filter(option: string) {

    this.title = this.titles[option]
    if (option == 'none') {
      this.filteredPaypalDataPoints = this.paypalDataPoints.map(rate => {
        return {
          label: this.dateService.reformatDate(rate.id.date || ''),
          y: rate.rate
        }
      })
      this.filteredVIBDataPoints = this.vibDataPoints.map(rate => {
        return {
          label: this.dateService.reformatDate(rate.id.date || ''),
          y: rate.rate
        }
      })
      this.filteredVCBDataPoints = this.vcbDataPoints.map(rate => {
        return {
          label: this.dateService.reformatDate(rate.id.date || ''),
          y: rate.rate
        }
      })
    } else {
      const begin = this.dateService.getDate(option) || new Date()

      this.filteredPaypalDataPoints = this.paypalDataPoints.slice().filter(p => new Date(p.id.date) >= begin).map(rate => {
        return {
          label: this.dateService.reformatDate(rate.id.date || ''),
          y: rate.rate
        }
      })
      this.filteredVIBDataPoints = this.vibDataPoints.slice().filter(p => new Date(p.id.date) >= begin).map(rate => {
        return {
          label: this.dateService.reformatDate(rate.id.date || ''),
          y: rate.rate
        }
      })
      this.filteredVCBDataPoints = this.vcbDataPoints.slice().filter(p => new Date(p.id.date) >= begin).map(rate => {
        return {
          label: this.dateService.reformatDate(rate.id.date || ''),
          y: rate.rate
        }
      })
    }
  }

}
