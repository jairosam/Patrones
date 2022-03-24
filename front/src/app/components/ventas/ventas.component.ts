import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Venta } from 'src/app/models/Venta';
import { VentasService } from 'src/app/services/ventas/ventas.service';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  formVentas: FormGroup;
  constructor(private formBuilder: FormBuilder, private ventasService: VentasService) {
    this.formVentas = this.formBuilder.group({
      idBicicleta: ['', [Validators.required]],
      precio: [, [Validators.required]],
      marca: ['', [Validators.required, Validators.maxLength(16)]]
    })
   }

  ngOnInit(): void {
  }

  guardarVenta(){
    const venta: Venta = {
      idBicicleta: this.formVentas.get('idBicicleta')?.value,
      precio: this.formVentas.get('precio')?.value,
      marca: this.formVentas.get('marca')?.value
    }

    this.ventasService.guardarVenta(venta).subscribe(data => {
      console.log('Guardado Venta');
      this.formVentas.reset();
    }, err => {
      500
      window.alert("El Componente no esta disponible");
    });
  }
}
