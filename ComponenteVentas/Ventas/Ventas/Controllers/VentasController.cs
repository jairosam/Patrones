using Microsoft.AspNetCore.Mvc;
using Ventas.Context;
using Ventas.Models;

namespace Ventas.Controllers
{
    [ApiController]
    [Route("api/ventas")]
    public class VentasController : Controller
    {
        private readonly VentasContext context;
        public VentasController(VentasContext context)
        {
            this.context = context;
        }

        [HttpPost]
        public async Task<ActionResult> RegistrarVenta(Venta venta)
        {
            context.Add(venta);
            await context.SaveChangesAsync();
            return Ok();
        }

    }
}
