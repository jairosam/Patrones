using Mantenimiento.Context;
using Mantenimiento.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Mantenimiento.Controllers
{
    [ApiController]
    [Route("api/agendas")]
    public class AgendasController : Controller
    {

        private readonly MantenimientoContext context;

        public AgendasController(MantenimientoContext context)
        {
            this.context = context;
        }

        [HttpPost]
        public async Task<ActionResult> agendar(Agenda agenda)
        {
            context.Add(agenda);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<List<Agenda>>> consultar()
        {
            return await context.Mantenimientos.ToListAsync();
        }
    }
}
