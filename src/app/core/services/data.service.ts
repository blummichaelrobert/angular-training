import { Injectable, Inject, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder, IState, IPagedResults, IApiResponse } from '../../shared/interfaces';
import { MockDataService } from 'src/app/shared/mocks';

@Injectable()
export class DataService {

    // Can use /api/customers and /api/orders below when running locally
    // Full domain/port is included for Docker example or if it were to run in the cloud
    port = (this.window.location.port) ? ':' + this.window.location.port : '';
    baseUrl = `${this.window.location.protocol}//${this.window.location.hostname}${this.port}`;
    customerBaseUrl = this.baseUrl + '/api/customers';
    orderBaseUrl = this.baseUrl + '/api/orders';
    orders: IOrder[];
    states: IState[];

    constructor(private http: HttpClient,
                private mockDataService: MockDataService,
                @Inject('Window') private window: Window) { }

    getCustomersPage(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {
        return this.mockDataService.getCustomersPage(page, pageSize);
        // return this.http.get<ICustomer[]>(`${this.customerBaseUrl}/page/${page}/${pageSize}`, { observe: 'response' })
        // .pipe(map(res => {
        //     console.log(res);
        //     const totalRecords = +res.headers.get('X-InlineCount');
        //     const customers = res.body as ICustomer[];
        //     this.calculateCustomersOrderTotal(customers);
        //     return { results: customers, totalRecords: totalRecords };
        // }),
        // catchError(this.handleError));
    }

    getCustomers(): Observable<ICustomer[]> {
        return this.mockDataService.getCustomers();
        // return this.http.get<ICustomer[]>(this.customerBaseUrl)
        // .pipe(map(customers => {
        //     this.calculateCustomersOrderTotal(customers);
        //     return customers;
        // }),
        // catchError(this.handleError));
    }

    getCustomer(id: number): Observable<ICustomer> {
        return this.mockDataService.getCustomer(id);
        // return this.http.get<ICustomer>(this.customerBaseUrl + '/' + id)
        // .pipe(map(customer => {
        //     this.calculateCustomersOrderTotal([customer]);
        //     return customer;
        // }),
        // catchError(this.handleError));
    }

    insertCustomer(customer: ICustomer): Observable<ICustomer> {
        return this.http.post<ICustomer>(this.customerBaseUrl, customer).pipe(catchError(this.handleError));
    }

    updateCustomer(customer: ICustomer): Observable<boolean> {
        return this.http.put<IApiResponse>(this.customerBaseUrl + '/' + customer.id, customer)
        .pipe(map(res => res.status), catchError(this.handleError));
    }

    deleteCustomer(id: number): Observable<boolean> {
        return this.http.delete<IApiResponse>(this.customerBaseUrl + '/' + id)
        .pipe(map(res => res.status), catchError(this.handleError));
    }

    getStates(): Observable<IState[]> {
        return this.http.get<IState[]>('/api/states').pipe(catchError(this.handleError));
    }

    calculateCustomersOrderTotal(customers: ICustomer[]) {
        for (const customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (const order of customer.orders) {
                    total += order.itemCost;
                }
                customer.orderTotal = total;
            }
        }
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return throwError(errMessage);
        }
        return throwError(error || 'Node.js server error');
    }
}
