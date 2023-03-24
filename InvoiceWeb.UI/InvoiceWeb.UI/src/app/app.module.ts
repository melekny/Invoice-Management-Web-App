import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicesListComponent } from './components/invoices/invoices-list/invoices-list.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { AddInvoiceComponent } from './components/invoices/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './components/invoices/edit-invoice/edit-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoicesListComponent,
    UsersListComponent,
    AddInvoiceComponent,
    EditInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
