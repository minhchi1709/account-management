/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CurrencyRateVib } from '../../models/currency-rate-vib';

export interface GetAllVibRates$Params {
}

export function getAllVibRates(http: HttpClient, rootUrl: string, params?: GetAllVibRates$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CurrencyRateVib>>> {
  const rb = new RequestBuilder(rootUrl, getAllVibRates.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CurrencyRateVib>>;
    })
  );
}

getAllVibRates.PATH = '/app/AccountManagement/api/v1/currency/vib';
