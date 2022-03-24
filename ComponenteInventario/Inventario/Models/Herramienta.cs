using System.ComponentModel.DataAnnotations;

namespace Inventario.Models
{
    public class Herramienta
    {
        [Key]
        public int herramientaId { get; set; }
        [Required]
        public string nombre { get; set; }
        [Required]
        public int cantidad { get; set; }
    }
}
