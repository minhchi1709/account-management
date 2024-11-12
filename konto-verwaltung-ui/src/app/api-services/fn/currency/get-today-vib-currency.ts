/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrencyRateVib } from '../../models/currency-rate-vib';

export interface GetTodayVibCurrency$Params {
}

export function getTodayVibCurrency(http: HttpClient, rootUrl: string, params?: GetTodayVibCurrency$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyRateVib>> {
  const rb = new RequestBuilder(rootUrl, getTodayVibCurrency.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CurrencyRateVib>;
    })
  );
}

getTodayVibCurrency.PATH = '/app/AccountManagement/api/v1/currency/today/vib';
