/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CurrencyExchangeRate } from '../models/currency-exchange-rate';
import { getAllRates } from '../fn/currency/get-all-rates';
import { GetAllRates$Params } from '../fn/currency/get-all-rates';
import { getTodayRate } from '../fn/currency/get-today-rate';
import { GetTodayRate$Params } from '../fn/currency/get-today-rate';
import { Rates } from '../models/rates';

@Injectable({ providedIn: 'root' })
export class CurrencyService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllRates()` */
  static readonly GetAllRatesPath = '/app/AccountManagement/api/v1/currency';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllRates()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRates$Response(params?: GetAllRates$Params, context?: HttpContext): Observable<StrictHttpResponse<Rates>> {
    return getAllRates(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllRates$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRates(params?: GetAllRates$Params, context?: HttpContext): Observable<Rates> {
    return this.getAllRates$Response(params, context).pipe(
      map((r: StrictHttpResponse<Rates>): Rates => r.body)
    );
  }

  /** Path part for operation `getTodayRate()` */
  static readonly GetTodayRatePath = '/app/AccountManagement/api/v1/currency/today';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTodayRate()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTodayRate$Response(params: GetTodayRate$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyExchangeRate>> {
    return getTodayRate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTodayRate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTodayRate(params: GetTodayRate$Params, context?: HttpContext): Observable<CurrencyExchangeRate> {
    return this.getTodayRate$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrencyExchangeRate>): CurrencyExchangeRate => r.body)
    );
  }

}
