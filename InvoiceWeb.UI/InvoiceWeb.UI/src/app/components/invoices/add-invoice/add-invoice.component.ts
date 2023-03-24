import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/models/invoce.model';
import { InvoicesService } from 'src/app/services/invoices.service';
import { InvoicesListComponent } from '../invoices-list/invoices-list.component';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  addInvoiceRequest: Invoice = {
    id:'',
    invoiceType:'',
    amount:0,
    invoiceDate:'',
    houseNo:0
   }

  constructor(private invoiceService: InvoicesService, private router: Router) {}
  
  ngOnInit(): void {
    
  }

  addInvoice() {
    this.invoiceService.addInvoice(this.addInvoiceRequest)
    .subscribe({
      next: (invoice) => {
        this.router.navigate(['invoices']);

      }
    });
  }
}
