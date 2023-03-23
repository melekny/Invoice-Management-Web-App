namespace InvoiceWeb.API.Models
{
    public class InvoiceModel
    {
        public Guid Id { get; set; }
        public string InvoiceType { get; set; }
        public decimal Amount { get; set; }
        public long HouseNo { get; set; }  
        public string InvoiceDate { get; set; }
    }
}
