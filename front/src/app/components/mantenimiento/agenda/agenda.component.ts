import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from 'src/app/services/mantenimiento/mantenimiento.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(public mantenimientoServicio: MantenimientoService) { }

  ngOnInit(): void {
    this.mantenimientoServicio.obtenerAgenda();
  }

}
