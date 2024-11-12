/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Transaction } from '../../models/transaction';

export interface GetAllTransactionsOfMonth$Params {
  year: number;
  month: number;
}

export function getAllTransactionsOfMonth(http: HttpClient, rootUrl: string, params: GetAllTransactionsOfMonth$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Transaction>>> {
  const rb = new RequestBuilder(rootUrl, getAllTransactionsOfMonth.PATH, 'get');
  if (params) {
    rb.path('year', params.year, {});
    rb.path('month', params.month, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Transaction>>;
    })
  );
}

getAllTransactionsOfMonth.PATH = '/app/AccountManagement/api/v1/transactions/years/{year}/months/{month}';