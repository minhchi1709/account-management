import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CreateTransactionComponent} from "./components/create-transaction/create-transaction.component";
import {HttpClientModule} from "@angular/common/http";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {Transaction} from "./services/models/transaction";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateTransactionComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'konto-verwaltung-ui';
  public monateDict: any =
    {
      'January': 1,
      'February': 2,
      'March': 3,
      'April': 4,
      'May': 5,
      'June': 6,
      'July': 7,
      'August': 8,
      'September': 9,
      'October': 10,
      'November': 11,
      'December': 12,
    }

  public sum(transactions: Transaction[]): number {
    let sum = 0;
    for (let t of transactions) {
      sum += t.value ? t.value : 0
    }
    return sum
  }

  public reformatDate(date: string): string {
    let temp = date.split('-')
    return `${temp[2]}-${temp[1]}-${temp[0]}`
  }

  public numberWithCommas(x: number):string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
