using Mantenimiento.Models;
using Microsoft.EntityFrameworkCore;

namespace Mantenimiento.Context
{
    public class MantenimientoContext : DbContext
    {
        public MantenimientoContext(DbContextOptions<MantenimientoContext> options) : base(options)
        {
        }

        public DbSet<Agenda> Mantenimientos { get; set; }

    }
}
