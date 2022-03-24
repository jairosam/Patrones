using Inventario.Context;
using Inventario.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Inventario.Controllers
{
    [ApiController]
    [Route("api/inventario")]
    public class HerramientasController : Controller
    {
        private readonly InventarioContext context;

        public HerramientasController(InventarioContext context)
        {
            this.context = context;
        }

        [HttpPost]
        public async Task<ActionResult> registrarHerramienta([FromBody] Herramienta herramienta)
        {
            context.Add(herramienta);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<List<Herramienta>>> consultarHerramientas()
        {
            return await context.Herramientas.ToListAsync();
        }

        [HttpPut]
        public async Task<ActionResult> consumirHerramienta([FromBody] Herramienta her)
        {
            var existeHerramienta = await context.Herramientas.AnyAsync(x => x.nombre == her.nombre);
            if (existeHerramienta)
            {
                var herramienta = await context.Herramientas.Where(x => x.nombre == her.nombre).SingleAsync();
                herramienta.cantidad = herramienta.cantidad - her.cantidad;
                context.Update(herramienta);
                await context.SaveChangesAsync();
                return Ok();
            }
            else
            {
                return BadRequest("La herramienta no se encuentra registrada");
            }
        }
        
    }
}
