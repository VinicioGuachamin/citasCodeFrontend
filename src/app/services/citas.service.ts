import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  url: any = 'https://localhost:44342/api/';

  constructor(
    private httpClient: HttpClient
  ) { }

  GetPlaca(placa: any) {
    return this.httpClient.get(this.url + 'Cita/' + placa);
  }

  InsertCita(placa: string, fecha: any) {
    const data = 'placa=' + placa + '&fecha=' + fecha;
    return this.httpClient.post(this.url + 'Cita?' + data, {}, {});
  }
}
