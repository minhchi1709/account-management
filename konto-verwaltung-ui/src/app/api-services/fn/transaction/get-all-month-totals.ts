/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MonthTotal } from '../../models/month-total';

export interface GetAllMonthTotals$Params {
  year: number;
}

export function getAllMonthTotals(http: HttpClient, rootUrl: string, params: GetAllMonthTotals$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MonthTotal>>> {
  const rb = new RequestBuilder(rootUrl, getAllMonthTotals.PATH, 'get');
  if (params) {
    rb.path('year', params.year, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MonthTotal>>;
    })
  );
}

getAllMonthTotals.PATH = '/app/AccountManagement/api/v1/transactions/years/{year}/month-total';