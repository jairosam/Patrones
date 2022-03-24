using System.ComponentModel.DataAnnotations;

namespace Mantenimiento.Models
{
    public class Agenda
    {
        [Key]
        public int agendaId { get; set; }
        [Required]
        public string propietario { get; set; }
        [Required]
        public string marca { get; set; }
        [Required]
        public string descripcion { get; set; }
    }
}
