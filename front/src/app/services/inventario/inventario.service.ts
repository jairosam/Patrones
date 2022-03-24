import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Herramienta } from 'src/app/models/Herramienta';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  myAppURl = "https://localhost:7230/";
  myApiURl = "api/inventario/";
  list: Herramienta[];

  constructor(private http: HttpClient) { }
  
  guardarHerramienta(herramienta: Herramienta): Observable<Herramienta>{
    return this.http.post<Herramienta>(this.myAppURl + this.myApiURl, herramienta);
  }
  
  gastarHerramienta(herramienta: Herramienta): Observable<Herramienta>{
    return this.http.put<Herramienta>(this.myAppURl + this.myApiURl, herramienta);
  }
  
  obtenerHerramientas(){
    this.http.get(this.myAppURl + this.myApiURl).toPromise()
    .then(data => {
      this.list = data as Herramienta[];
    })
  }
}

