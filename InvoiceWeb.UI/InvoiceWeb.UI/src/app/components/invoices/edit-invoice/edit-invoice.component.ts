import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Invoice } from 'src/app/models/invoce.model';
import { InvoicesService } from 'src/app/services/invoices.service';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {

  invoiceDetails: Invoice = {
    id:'',
    invoiceType:'',
    amount:0,
    invoiceDate:'',
    houseNo:0
  }

  constructor( private invoiceService:InvoicesService, private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => { 
      const id = params.get('id');

      if (id) {
        this.invoiceService.getInvoice(id)
        .subscribe({
          next: (response) => {
            this.invoiceDetails = response;
          }
        });
      }
    }
  })
}
 
  updateInvoice() {
    this.invoiceService.updateInvoice(this.invoiceDetails.id, this.invoiceDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['invoices']);
      }
    });
 }
  
  deleteInvoice(id: string){
    this.invoiceService.deleteInvoice(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['invoices']);
      }
    });
  }
  
}