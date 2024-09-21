import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../../services/services/transaction.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{

  jahres : number[] = []

  constructor(
    private transactionService: TransactionService,
    private app: AppComponent
  ) {
  }

  ngOnInit(): void {
    this.transactionService.getAllYears()
      .subscribe(
        {
          next: res => this.jahres = res,
          error: err => console.log(err),
        }
      )
  }

}
