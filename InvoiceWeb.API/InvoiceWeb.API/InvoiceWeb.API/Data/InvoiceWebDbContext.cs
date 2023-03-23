using InvoiceWeb.API.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace InvoiceWeb.API.Data
{
    public class InvoiceWebDbContext : DbContext
    {
        public InvoiceWebDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<InvoiceModel> Invoices { get; set; }
        public DbSet<UserModel> Users { get; set; }
    }
}
