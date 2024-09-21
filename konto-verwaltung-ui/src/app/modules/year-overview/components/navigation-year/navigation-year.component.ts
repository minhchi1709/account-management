import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TransactionService} from "../../../../services/services/transaction.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navigation-year',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './navigation-year.component.html',
  styleUrl: './navigation-year.component.scss'
})
export class NavigationYearComponent implements OnInit {

  monate: string[] = []
  year: number = 0

  constructor(
    private transactionService: TransactionService,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.year = this.router.snapshot.params['year'];
    this.transactionService.getAllMonths({
      year: this.year
    }).subscribe({
      next: res => {
        this.monate = res.map(val => this.capitalize(val))
      },
      error: err => console.log(err)
    })
  }

  private capitalize(input: string):string {
    let temp:string = input.toLowerCase()
    return temp.charAt(0).toUpperCase() + temp.slice(1);
  }

}
