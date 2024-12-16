/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Rates } from '../../models/rates';

export interface GetAllRates$Params {
}

export function getAllRates(http: HttpClient, rootUrl: string, params?: GetAllRates$Params, context?: HttpContext): Observable<StrictHttpResponse<Rates>> {
  const rb = new RequestBuilder(rootUrl, getAllRates.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Rates>;
    })
  );
}

getAllRates.PATH = '/app/AccountManagement/api/v1/currency';
