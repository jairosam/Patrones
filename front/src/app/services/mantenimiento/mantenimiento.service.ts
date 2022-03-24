import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agenda } from 'src/app/models/Agenda';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  myAppURl = "https://localhost:7079/";
  myApiURl = "api/agendas/";
  list: Agenda[];

  constructor(private http: HttpClient) { }

  agendarMantenimiento(agenda: Agenda){
    return this.http.post<Agenda>(this.myAppURl + this.myApiURl, agenda);
  }

  obtenerAgenda(){
    this.http.get(this.myAppURl + this.myApiURl).toPromise()
    .then(data => {
      this.list = data as Agenda[];
    })
  }


}
