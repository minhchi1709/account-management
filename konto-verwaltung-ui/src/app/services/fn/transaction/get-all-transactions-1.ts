/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Transaction } from '../../models/transaction';

export interface GetAllTransactions1$Params {
}

export function getAllTransactions1(http: HttpClient, rootUrl: string, params?: GetAllTransactions1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Transaction>>> {
  const rb = new RequestBuilder(rootUrl, getAllTransactions1.PATH, 'get');
  if (params) {
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

getAllTransactions1.PATH = '/';
