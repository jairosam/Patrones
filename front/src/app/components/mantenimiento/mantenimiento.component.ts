import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MantenimientoService } from 'src/app/services/mantenimiento/mantenimiento.service';
import { Agenda } from 'src/app/models/Agenda';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

  formMantenimiento: FormGroup;
  constructor(private formBuilder: FormBuilder, private mantenimientoServicio: MantenimientoService) { 
    this.formMantenimiento = this.formBuilder.group({
      propietario: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    })
  }
  
  ngOnInit(): void {
  }

  agendarMantenimiento(){
    const agenda: Agenda = {
      propietario: this.formMantenimiento.get('propietario')?.value,
      marca: this.formMantenimiento.get('marca')?.value,
      descripcion: this.formMantenimiento.get('descripcion')?.value
    }

    this.mantenimientoServicio.agendarMantenimiento(agenda).subscribe(data => {
      console.log('Agendado Mantenimiento');
      this.formMantenimiento.reset();
    }, err =>{
      window.alert("El Componente no esta disponible");
    })
  }

}
