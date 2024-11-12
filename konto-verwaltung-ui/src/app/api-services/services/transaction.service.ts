/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createTransaction } from '../fn/transaction/create-transaction';
import { CreateTransaction$Params } from '../fn/transaction/create-transaction';
import { deleteTransaction } from '../fn/transaction/delete-transaction';
import { DeleteTransaction$Params } from '../fn/transaction/delete-transaction';
import { getAllMonths } from '../fn/transaction/get-all-months';
import { GetAllMonths$Params } from '../fn/transaction/get-all-months';
import { getAllMonthTotals } from '../fn/transaction/get-all-month-totals';
import { GetAllMonthTotals$Params } from '../fn/transaction/get-all-month-totals';
import { getAllTransactions } from '../fn/transaction/get-all-transactions';
import { GetAllTransactions$Params } from '../fn/transaction/get-all-transactions';
import { getAllTransactionsOfMonth } from '../fn/transaction/get-all-transactions-of-month';
import { GetAllTransactionsOfMonth$Params } from '../fn/transaction/get-all-transactions-of-month';
import { getAllTransactionsOfYear } from '../fn/transaction/get-all-transactions-of-year';
import { GetAllTransactionsOfYear$Params } from '../fn/transaction/get-all-transactions-of-year';
import { getAllYears } from '../fn/transaction/get-all-years';
import { GetAllYears$Params } from '../fn/transaction/get-all-years';
import { getTransactionById } from '../fn/transaction/get-transaction-by-id';
import { GetTransactionById$Params } from '../fn/transaction/get-transaction-by-id';
import { MonthTotal } from '../models/month-total';
import { Transaction } from '../models/transaction';
import { updateTransaction } from '../fn/transaction/update-transaction';
import { UpdateTransaction$Params } from '../fn/transaction/update-transaction';

@Injectable({ providedIn: 'root' })
export class TransactionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTransactionById()` */
  static readonly GetTransactionByIdPath = '/app/AccountManagement/api/v1/transactions/transactions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTransactionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransactionById$Response(params: GetTransactionById$Params, context?: HttpContext): Observable<StrictHttpResponse<Transaction>> {
    return getTransactionById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTransactionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransactionById(params: GetTransactionById$Params, context?: HttpContext): Observable<Transaction> {
    return this.getTransactionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Transaction>): Transaction => r.body)
    );
  }

  /** Path part for operation `updateTransaction()` */
  static readonly UpdateTransactionPath = '/app/AccountManagement/api/v1/transactions/transactions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTransaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTransaction$Response(params: UpdateTransaction$Params, context?: HttpContext): Observable<StrictHttpResponse<Transaction>> {
    return updateTransaction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTransaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTransaction(params: UpdateTransaction$Params, context?: HttpContext): Observable<Transaction> {
    return this.updateTransaction$Response(params, context).pipe(
      map((r: StrictHttpResponse<Transaction>): Transaction => r.body)
    );
  }

  /** Path part for operation `deleteTransaction()` */
  static readonly DeleteTransactionPath = '/app/AccountManagement/api/v1/transactions/transactions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTransaction()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTransaction$Response(params: DeleteTransaction$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return deleteTransaction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTransaction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTransaction(params: DeleteTransaction$Params, context?: HttpContext): Observable<number> {
    return this.deleteTransaction$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getAllTransactions()` */
  static readonly GetAllTransactionsPath = '/app/AccountManagement/api/v1/transactions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTransactions()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTransactions$Response(params?: GetAllTransactions$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Transaction>>> {
    return getAllTransactions(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTransactions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTransactions(params?: GetAllTransactions$Params, context?: HttpContext): Observable<Array<Transaction>> {
    return this.getAllTransactions$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Transaction>>): Array<Transaction> => r.body)
    );
  }

  /** Path part for operation `createTransaction()` */
  static readonly CreateTransactionPath = '/app/AccountManagement/api/v1/transactions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTransaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTransaction$Response(params: CreateTransaction$Params, context?: HttpContext): Observable<StrictHttpResponse<Transaction>> {
    return createTransaction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTransaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTransaction(params: CreateTransaction$Params, context?: HttpContext): Observable<Transaction> {
    return this.createTransaction$Response(params, context).pipe(
      map((r: StrictHttpResponse<Transaction>): Transaction => r.body)
    );
  }

  /** Path part for operation `getAllYears()` */
  static readonly GetAllYearsPath = '/app/AccountManagement/api/v1/transactions/years';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllYears()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllYears$Response(params?: GetAllYears$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<number>>> {
    return getAllYears(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllYears$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllYears(params?: GetAllYears$Params, context?: HttpContext): Observable<Array<number>> {
    return this.getAllYears$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<number>>): Array<number> => r.body)
    );
  }

  /** Path part for operation `getAllTransactionsOfYear()` */
  static readonly GetAllTransactionsOfYearPath = '/app/AccountManagement/api/v1/transactions/years/{year}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTransactionsOfYear()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTransactionsOfYear$Response(params: GetAllTransactionsOfYear$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Transaction>>> {
    return getAllTransactionsOfYear(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTransactionsOfYear$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTransactionsOfYear(params: GetAllTransactionsOfYear$Params, context?: HttpContext): Observable<Array<Transaction>> {
    return this.getAllTransactionsOfYear$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Transaction>>): Array<Transaction> => r.body)
    );
  }

  /** Path part for operation `getAllMonths()` */
  static readonly GetAllMonthsPath = '/app/AccountManagement/api/v1/transactions/years/{year}/months';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllMonths()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMonths$Response(params: GetAllMonths$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<'JANUARY' | 'FEBRUARY' | 'MARCH' | 'APRIL' | 'MAY' | 'JUNE' | 'JULY' | 'AUGUST' | 'SEPTEMBER' | 'OCTOBER' | 'NOVEMBER' | 'DECEMBER'>>> {
    return getAllMonths(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllMonths$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMonths(params: GetAllMonths$Params, context?: HttpContext): Observable<Array<'JANUARY' | 'FEBRUARY' | 'MARCH' | 'APRIL' | 'MAY' | 'JUNE' | 'JULY' | 'AUGUST' | 'SEPTEMBER' | 'OCTOBER' | 'NOVEMBER' | 'DECEMBER'>> {
    return this.getAllMonths$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<'JANUARY' | 'FEBRUARY' | 'MARCH' | 'APRIL' | 'MAY' | 'JUNE' | 'JULY' | 'AUGUST' | 'SEPTEMBER' | 'OCTOBER' | 'NOVEMBER' | 'DECEMBER'>>): Array<'JANUARY' | 'FEBRUARY' | 'MARCH' | 'APRIL' | 'MAY' | 'JUNE' | 'JULY' | 'AUGUST' | 'SEPTEMBER' | 'OCTOBER' | 'NOVEMBER' | 'DECEMBER'> => r.body)
    );
  }

  /** Path part for operation `getAllTransactionsOfMonth()` */
  static readonly GetAllTransactionsOfMonthPath = '/app/AccountManagement/api/v1/transactions/years/{year}/months/{month}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTransactionsOfMonth()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTransactionsOfMonth$Response(params: GetAllTransactionsOfMonth$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Transaction>>> {
    return getAllTransactionsOfMonth(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTransactionsOfMonth$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTransactionsOfMonth(params: GetAllTransactionsOfMonth$Params, context?: HttpContext): Observable<Array<Transaction>> {
    return this.getAllTransactionsOfMonth$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Transaction>>): Array<Transaction> => r.body)
    );
  }

  /** Path part for operation `getAllMonthTotals()` */
  static readonly GetAllMonthTotalsPath = '/app/AccountManagement/api/v1/transactions/years/{year}/month-total';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllMonthTotals()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMonthTotals$Response(params: GetAllMonthTotals$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MonthTotal>>> {
    return getAllMonthTotals(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllMonthTotals$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllMonthTotals(params: GetAllMonthTotals$Params, context?: HttpContext): Observable<Array<MonthTotal>> {
    return this.getAllMonthTotals$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MonthTotal>>): Array<MonthTotal> => r.body)
    );
  }

}