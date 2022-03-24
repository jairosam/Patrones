using Inventario.Models;
using Microsoft.EntityFrameworkCore;

namespace Inventario.Context
{
    public class InventarioContext : DbContext
    {
        public InventarioContext(DbContextOptions<InventarioContext> options) : base(options)
        {
        }
        public DbSet<Herramienta> Herramientas { get; set; }
    }
}
