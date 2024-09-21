/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Transaction } from '../../models/transaction';
import { TransactionRequest } from '../../models/transaction-request';

export interface UpdateTransaction$Params {
  id: number;
      body: TransactionRequest
}

export function updateTransaction(http: HttpClient, rootUrl: string, params: UpdateTransaction$Params, context?: HttpContext): Observable<StrictHttpResponse<Transaction>> {
  const rb = new RequestBuilder(rootUrl, updateTransaction.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Transaction>;
    })
  );
}

updateTransaction.PATH = '/transactions/{id}';
