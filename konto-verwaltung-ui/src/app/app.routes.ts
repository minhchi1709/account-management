import { Routes } from '@angular/router';
import {AccountBalanceComponent} from "./components/account-balance/account-balance.component";

export const routes: Routes = [
  {
    path: '',
    component: AccountBalanceComponent
  },
  {
    path: 'years',
    loadChildren: () => import('./modules/year-overview/year-overview.module').then(m => m.YearOverviewModule)
  },
  {
    path: 'currency',
    loadChildren: () => import('./modules/currency/currency.module').then(m => m.CurrencyModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
