using Microsoft.EntityFrameworkCore;
using Ventas.Models;

namespace Ventas.Context
{
    public class VentasContext : DbContext
    {
        public VentasContext(DbContextOptions<VentasContext> options) : base(options)
        {
        }

        public DbSet<Venta> ventas { get; set; }

    }
}
