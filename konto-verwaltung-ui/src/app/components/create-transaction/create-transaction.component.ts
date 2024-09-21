import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {TransactionRequest} from "../../services/models/transaction-request";
import {TransactionService} from "../../services/services/transaction.service";
import {NgIf} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-create-transaction',
  standalone: true,
  providers: [
    provideMomentDateAdapter(MY_FORMATS),
  ],
  imports: [
    FormsModule,
    NgIf,
    MatFormField,
    MatInputModule,
    MatDatepickerInput,
    ReactiveFormsModule,
    MatDatepickerToggle,
    MatDatepicker,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
  templateUrl: './create-transaction.component.html',
  styleUrl: './create-transaction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTransactionComponent implements OnInit{
  readonly date = new FormControl(moment());
  tranRequest: TransactionRequest = {value: 0, description: '', date: ''}
  expanded: boolean = false

  constructor(
    private transactionService: TransactionService
  ) {
  }

  addTransaction() {
    if (!this.tranRequest.date){
      const now = new Date()
      now.getDate()
      this.tranRequest.date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
    }
    console.log(this.tranRequest.date);
    
    this.transactionService.createTransaction1(
      {
        body: this.tranRequest
      }
    ).subscribe({
      next: res => {
        console.log(res)
        window.location.reload()
      },
      error: err => console.log(err),
    })
  }

  createButton() {
    this.expanded = !this.expanded;
  }

  ngOnInit(): void {
    if (window.location.href == 'http://localhost:4200/') {
      document.getElementById('transactionCreate')?.classList.add('show')
      this.expanded = true
    }
  }


  updateDate(dateObject: any) {
    const ctrValue = this.date.value ?? moment()
    this.tranRequest.date = `${ctrValue.year()}-${ctrValue.month() + 1}-${ctrValue.date()}`;
  }

}
