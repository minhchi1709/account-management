import {Component, OnInit} from '@angular/core';
import {CreateTransactionComponent} from "../../../../components/create-transaction/create-transaction.component";
import {NavigationYearComponent} from "../navigation-year/navigation-year.component";
import {RouterOutlet} from "@angular/router";
import {YearDetailsComponent} from "../year-details/year-details.component";

@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [
    CreateTransactionComponent,
    NavigationYearComponent,
    RouterOutlet,
    YearDetailsComponent
  ],
  templateUrl: './overview-page.component.html',
  styleUrl: './overview-page.component.scss'
})
export class OverviewPageComponent implements OnInit{
  ngOnInit(): void {
    let temp = window.location.href.split('/')
    if (temp.includes('years')) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active')
      })
      document.getElementById(temp[temp.indexOf('years') + 1])?.classList.add('active')
    }
  }

}
