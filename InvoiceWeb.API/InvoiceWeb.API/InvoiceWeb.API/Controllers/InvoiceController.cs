using InvoiceWeb.API.Data;
using InvoiceWeb.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InvoiceWeb.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoiceController : Controller
    {
        private readonly InvoiceWebDbContext _invoiceWebDbContext;
        public InvoiceController(InvoiceWebDbContext invoiceWebDbContext)
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
    }
}

