using System.ComponentModel.DataAnnotations;

namespace Ventas.Models
{
    public class Venta
    {
        [Key]
        public int ventaId { get; set; }
        [Required]
        public string idBicicleta { get; set; }
        [Required]
        public int precio { get; set; }
        [Required]
        public string marca { get; set; }
    }
}
