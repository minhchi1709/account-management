/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createTransaction1 } from '../fn/transaction/create-transaction-1';
import { CreateTransaction1$Params } from '../fn/transaction/create-transaction-1';
import { deleteTransaction } from '../fn/transaction/delete-transaction';
import { DeleteTransaction$Params } from '../fn/transaction/delete-transaction';
import { getAllMonths } from '../fn/transaction/get-all-months';
import { GetAllMonths$Params } from '../fn/transaction/get-all-months';
import { getAllTransactions1 } from '../fn/transaction/get-all-transactions-1';
import { GetAllTransactions1$Params } from '../fn/transaction/get-all-transactions-1';
import { getAllTransactionsOfMonth } from '../fn/transaction/get-all-transactions-of-month';
import { GetAllTransactionsOfMonth$Params } from '../fn/transaction/get-all-transactions-of-month';
import { getAllTransactionsOfYear } from '../fn/transaction/get-all-transactions-of-year';
import { GetAllTransactionsOfYear$Params } from '../fn/transaction/get-all-transactions-of-year';
import { getAllYears } from '../fn/transaction/get-all-years';
import { GetAllYears$Params } from '../fn/transaction/get-all-years';
import { getTransactionById } from '../fn/transaction/get-transaction-by-id';
import { GetTransactionById$Params } from '../fn/transaction/get-transaction-by-id';
import { Transaction } from '../models/transaction';
import { updateTransaction } from '../fn/transaction/update-transaction';
import { UpdateTransaction$Params } from '../fn/transaction/update-transaction';

@Injectable({ providedIn: 'root' })
export class TransactionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTransactionById()` */
  static readonly GetTransactionByIdPath = '/transactions/{id}';

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
  static readonly UpdateTransactionPath = '/transactions/{id}';

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
  static readonly DeleteTransactionPath = '/transactions/{id}';

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

  /** Path part for operation `getAllTransactions1()` */
  static readonly GetAllTransactions1Path = '/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTransactions1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTransactions1$Response(params?: GetAllTransactions1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Transaction>>> {
    return getAllTransactions1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTransactions1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTransactions1(params?: GetAllTransactions1$Params, context?: HttpContext): Observable<Array<Transaction>> {
    return this.getAllTransactions1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Transaction>>): Array<Transaction> => r.body)
    );
  }

  /** Path part for operation `createTransaction1()` */
  static readonly CreateTransaction1Path = '/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTransaction1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTransaction1$Response(params: CreateTransaction1$Params, context?: HttpContext): Observable<StrictHttpResponse<Transaction>> {
    return createTransaction1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTransaction1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTransaction1(params: CreateTransaction1$Params, context?: HttpContext): Observable<Transaction> {
    return this.createTransaction1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Transaction>): Transaction => r.body)
    );
  }

  /** Path part for operation `getAllYears()` */
  static readonly GetAllYearsPath = '/years';

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
  static readonly GetAllTransactionsOfYearPath = '/years/{year}';

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
  static readonly GetAllMonthsPath = '/years/{year}/months';

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
  static readonly GetAllTransactionsOfMonthPath = '/years/{year}/months/{month}';

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

}
