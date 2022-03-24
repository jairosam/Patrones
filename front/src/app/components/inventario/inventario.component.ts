import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Herramienta } from 'src/app/models/Herramienta';
import { InventarioService } from 'src/app/services/inventario/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  formInventario: FormGroup;
  constructor(private formBuilder: FormBuilder, private inventarioService: InventarioService) { 
    this.formInventario = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      cantidad: [, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  guardarHerramienta(){
    const herramienta: Herramienta = {
      nombre: this.formInventario.get('nombre')?.value,
      cantidad: this.formInventario.get('cantidad')?.value
    }

    this.inventarioService.guardarHerramienta(herramienta).subscribe(data => {
      console.log('Guardada Herramienta');
      this.formInventario.reset();
    }, err => {
      window.alert("El Componente no esta disponible");      
    })
  }

  gastarHerramienta(){
    const herramienta: Herramienta = {
      nombre: this.formInventario.get('nombre')?.value,
      cantidad: this.formInventario.get('cantidad')?.value
    }

    this.inventarioService.gastarHerramienta(herramienta).subscribe(data => {
      console.log('Herramienta consumida');
      this.formInventario.reset();      
    }, err => {
      window.alert("El Componente no esta disponible");      
    })
  }
  
}
