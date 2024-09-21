import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TransactionRequest} from "../../../services/models/transaction-request";
import {TransactionService} from "../../../services/services/transaction.service";
import {ActivatedRoute} from "@angular/router";
import {AppComponent} from "../../../app.component";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {default as _rollupMoment} from "moment/moment";
import * as _moment from "moment/moment";
import {provideMomentDateAdapter} from "@angular/material-moment-adapter";
import {NgIf} from "@angular/common";

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
  selector: 'app-transaction-detail',
  standalone: true,
  providers: [
    provideMomentDateAdapter(MY_FORMATS),
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    MatSuffix,
    NgIf
  ],
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionDetailComponent implements OnInit{

  date:any = new FormControl(moment())
  loaded: boolean = false

  transaction: TransactionRequest = {value: 0, description: '', date: ''}
  private id: number = 0

  constructor(
    private transactionService: TransactionService,
    private router: ActivatedRoute,
    protected app: AppComponent
  ){
  }

  edit() {

    this.transactionService.updateTransaction({
      id: this.id,
      body: this.transaction
    }).subscribe({
      next: res => {
        window.history.back()
      },
      error: err => console.log(err)
    })
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    let temp = window.location.href.split('?')[1].split('&')

    this.transaction.value = Number(temp[0].split('=')[1])
    this.transaction.description = temp[1].split('=')[1].replaceAll('%20', ' ')
    this.transaction.date = temp[2].split('=')[1]

    this.loaded = true
  }

  del() {
    this.transactionService.deleteTransaction({
      id: this.id
    }).subscribe({
      next: value => {
        window.history.back()
      }
    })
  }

  updateDate(dateObject: any) {
    const ctrValue = this.date.value ?? moment()
    this.transaction.date = `${ctrValue.year()}-${ctrValue.month() + 1}-${ctrValue.date()}`;
  }
}
