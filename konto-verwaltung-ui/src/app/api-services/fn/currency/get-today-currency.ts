/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrencyRate } from '../../models/currency-rate';

export interface GetTodayCurrency$Params {
}

export function getTodayCurrency(http: HttpClient, rootUrl: string, params?: GetTodayCurrency$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyRate>> {
  const rb = new RequestBuilder(rootUrl, getTodayCurrency.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CurrencyRate>;
    })
  );
}

getTodayCurrency.PATH = '/app/AccountManagement/api/v1/currency/today';
