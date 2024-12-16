/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrencyExchangeRate } from '../../models/currency-exchange-rate';

export interface GetTodayRate$Params {
  bank: string;
}

export function getTodayRate(http: HttpClient, rootUrl: string, params: GetTodayRate$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyExchangeRate>> {
  const rb = new RequestBuilder(rootUrl, getTodayRate.PATH, 'get');
  if (params) {
    rb.query('bank', params.bank, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CurrencyExchangeRate>;
    })
  );
}

getTodayRate.PATH = '/app/AccountManagement/api/v1/currency/today';
