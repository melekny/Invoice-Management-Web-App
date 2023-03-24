using InvoiceWeb.API.Data;
using InvoiceWeb.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InvoiceWeb.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoicesController : Controller
    {
        private readonly InvoiceWebDbContext _invoiceWebDbContext;
        public InvoicesController(InvoiceWebDbContext invoiceWebDbContext)
        {
            _invoiceWebDbContext = invoiceWebDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllInvoices()
        {
            var invoices = await _invoiceWebDbContext.Invoices.ToListAsync();

            return Ok(invoices);
        }

        [HttpPost]
        public async Task<IActionResult> AddInvoice([FromBody] InvoiceModel invoiceRequest)
        {
            invoiceRequest.Id = Guid.NewGuid();
            await _invoiceWebDbContext.Invoices.AddAsync(invoiceRequest);
            await _invoiceWebDbContext.SaveChangesAsync();

            return Ok(invoiceRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetInvoice([FromRoute] Guid id)
        {
            var invoice =
                await _invoiceWebDbContext.Invoices.FirstOrDefaultAsync(x => x.Id == id);

            if(invoice == null)
            {
                return NotFound();
            }
            return Ok(invoice);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateInvoice([FromRoute] Guid id, InvoiceModel updateInvoiceRequest) 
        {
            var invoice = await _invoiceWebDbContext.Invoices.FindAsync(id);

            if(invoice == null)
            {
                return NotFound();
            }
            invoice.InvoiceType = updateInvoiceRequest.InvoiceType;
            invoice.Amount = updateInvoiceRequest.Amount;   
            invoice.InvoiceDate = updateInvoiceRequest.InvoiceDate;
            invoice.HouseNo = updateInvoiceRequest.HouseNo;

            await _invoiceWebDbContext.SaveChangesAsync();

            return Ok(invoice);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteInvoice([FromRoute] Guid id)
        {
            var invoice = await _invoiceWebDbContext.Invoices.FindAsync(id);

            if (invoice == null)
            {
                return NotFound();
            }

            _invoiceWebDbContext.Invoices.Remove(invoice);
            await _invoiceWebDbContext.SaveChangesAsync();

            return Ok(invoice);

        }

    }
}
