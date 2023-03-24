import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice } from '../models/invoce.model';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.baseApiUrl + '/api/invoices');
  }

  addInvoice(addInvoiceRequest: Invoice): Observable<Invoice> {
    addInvoiceRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Invoice>(this.baseApiUrl + '/api/invoices',
    addInvoiceRequest);
  }

  getInvoice(id: string): Observable<Invoice> {
    return this.http.get<Invoice>(this.baseApiUrl + '/api/invoices/' + id)
  }

  updateInvoice(id: string, updateInvoiceRequest: Invoice):
   Observable<Invoice> {
    return this.http.put<Invoice>(this.baseApiUrl + '/api/invoices/' + id,
    updateInvoiceRequest);
  }

  deleteInvoice(id:string): Observable<Invoice> {
    return this.http.delete<Invoice>(this.baseApiUrl + '/api/invoices/' + id);
  }
}