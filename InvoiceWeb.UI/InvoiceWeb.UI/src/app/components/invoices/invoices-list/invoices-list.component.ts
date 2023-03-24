import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoce.model';
import { InvoicesService } from 'src/app/services/invoices.service';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {

  invoices: Invoice[] = [];

  constructor(private invoicesService: InvoicesService) { }

  ngOnInit(): void {
    this.invoicesService.getAllInvoices()
    .subscribe({
      next: (invoices) => {
        this.invoices = invoices; 
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}