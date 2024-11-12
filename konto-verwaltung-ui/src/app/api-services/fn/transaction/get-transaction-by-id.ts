/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Transaction } from '../../models/transaction';

export interface GetTransactionById$Params {
  id: number;
}

export function getTransactionById(http: HttpClient, rootUrl: string, params: GetTransactionById$Params, context?: HttpContext): Observable<StrictHttpResponse<Transaction>> {
  const rb = new RequestBuilder(rootUrl, getTransactionById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getTransactionById.PATH = '/app/AccountManagement/api/v1/transactions/transactions/{id}';