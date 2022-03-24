import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from 'src/app/models/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  myAppURl = "https://localhost:7012/";
  myApiURl = "api/ventas/";

  constructor(private http: HttpClient) { }

  guardarVenta(venta: Venta): Observable<Venta>{
    return this.http.post<Venta>(this.myAppURl + this.myApiURl, venta);
  }
}
