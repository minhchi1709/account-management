import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../../../api-services/services/currency.service";
import {GraphComponent} from "../../../../components/graph/graph.component";
import {NgIf} from "@angular/common";
import {LoaderComponent} from "../../../../components/loader/loader.component";

@Component({
  selector: 'app-currency-exchange',
  standalone: true,
  imports: [
    GraphComponent,
    NgIf,
    LoaderComponent
  ],
  templateUrl: './currency-exchange.component.html',
  styleUrl: './currency-exchange.component.scss'
})
export class CurrencyExchangeComponent implements OnInit{
  title: string = 'Geldwechselsrate von EUR zu VND'
  vibDataPoints: any[] = []
  paypalDataPoints: any[] = []
  vcbDataPoints: any[] = []
  xTitle: string = 'Datum'
  yTitle: string = 'VND'
  loaded: boolean = false

  constructor(
    private service: CurrencyService
  ) {
  }

  ngOnInit(): void {

    this.service.getAllRates().subscribe({
      next: value => {
        this.paypalDataPoints = value.paypalRates!.map(rate => ({
            label: rate.id!.date,
            y: rate.rate
          })) || []

        this.vibDataPoints = value.vibRates!.map(rate => ({
          label: rate.id!.date,
          y: rate.rate
        })) || []

        this.vcbDataPoints = value.vcbRates!.map(rate => ({
          label: rate.id!.date,
          y: rate.rate
        })) || []

        this.loaded = true
      }
    })
  }
}
