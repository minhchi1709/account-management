/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CurrencyRate } from '../models/currency-rate';
import { CurrencyRateVib } from '../models/currency-rate-vib';
import { getAllRates } from '../fn/currency/get-all-rates';
import { GetAllRates$Params } from '../fn/currency/get-all-rates';
import { getAllVibRates } from '../fn/currency/get-all-vib-rates';
import { GetAllVibRates$Params } from '../fn/currency/get-all-vib-rates';
import { getTodayCurrency } from '../fn/currency/get-today-currency';
import { GetTodayCurrency$Params } from '../fn/currency/get-today-currency';
import { getTodayVibCurrency } from '../fn/currency/get-today-vib-currency';
import { GetTodayVibCurrency$Params } from '../fn/currency/get-today-vib-currency';

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
  getAllRates$Response(params?: GetAllRates$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CurrencyRate>>> {
    return getAllRates(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllRates$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRates(params?: GetAllRates$Params, context?: HttpContext): Observable<Array<CurrencyRate>> {
    return this.getAllRates$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CurrencyRate>>): Array<CurrencyRate> => r.body)
    );
  }

  /** Path part for operation `getAllVibRates()` */
  static readonly GetAllVibRatesPath = '/app/AccountManagement/api/v1/currency/vib';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllVibRates()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllVibRates$Response(params?: GetAllVibRates$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CurrencyRateVib>>> {
    return getAllVibRates(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllVibRates$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllVibRates(params?: GetAllVibRates$Params, context?: HttpContext): Observable<Array<CurrencyRateVib>> {
    return this.getAllVibRates$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CurrencyRateVib>>): Array<CurrencyRateVib> => r.body)
    );
  }

  /** Path part for operation `getTodayCurrency()` */
  static readonly GetTodayCurrencyPath = '/app/AccountManagement/api/v1/currency/today';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTodayCurrency()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTodayCurrency$Response(params?: GetTodayCurrency$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyRate>> {
    return getTodayCurrency(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTodayCurrency$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTodayCurrency(params?: GetTodayCurrency$Params, context?: HttpContext): Observable<CurrencyRate> {
    return this.getTodayCurrency$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrencyRate>): CurrencyRate => r.body)
    );
  }

  /** Path part for operation `getTodayVibCurrency()` */
  static readonly GetTodayVibCurrencyPath = '/app/AccountManagement/api/v1/currency/today/vib';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTodayVibCurrency()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTodayVibCurrency$Response(params?: GetTodayVibCurrency$Params, context?: HttpContext): Observable<StrictHttpResponse<CurrencyRateVib>> {
    return getTodayVibCurrency(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTodayVibCurrency$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTodayVibCurrency(params?: GetTodayVibCurrency$Params, context?: HttpContext): Observable<CurrencyRateVib> {
    return this.getTodayVibCurrency$Response(params, context).pipe(
      map((r: StrictHttpResponse<CurrencyRateVib>): CurrencyRateVib => r.body)
    );
  }

}
