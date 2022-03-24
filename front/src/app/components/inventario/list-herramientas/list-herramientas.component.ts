import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/services/inventario/inventario.service';

@Component({
  selector: 'app-list-herramientas',
  templateUrl: './list-herramientas.component.html',
  styleUrls: ['./list-herramientas.component.css']
})
export class ListHerramientasComponent implements OnInit {

  constructor(public inventarioServicio: InventarioService) { }

  ngOnInit(): void {
    this.inventarioServicio.obtenerHerramientas();
  }

}
