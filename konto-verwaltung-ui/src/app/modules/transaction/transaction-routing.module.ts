import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionDetailComponent} from "./transaction-detail/transaction-detail.component";

const routes: Routes = [
  {
    path: ':id',
    component: TransactionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
