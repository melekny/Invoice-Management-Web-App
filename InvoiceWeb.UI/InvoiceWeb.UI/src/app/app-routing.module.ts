import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './components/invoices/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './components/invoices/edit-invoice/edit-invoice.component';
import { InvoicesListComponent } from './components/invoices/invoices-list/invoices-list.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';

const routes: Routes = [
  
  {
   path: 'invoices',
   component: InvoicesListComponent
  
  },

  {
    path: 'invoices/add',
    component: AddInvoiceComponent
   
   },

   {
    path: 'invoices/edit/:id',
    component: EditInvoiceComponent
   
   },

  {
    path: 'users',
    component: UsersListComponent
   
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
