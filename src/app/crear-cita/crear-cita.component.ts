import { Component, OnInit } from '@angular/core';
import {CitasService} from '../services/citas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  placa: any;
  fecha: any;

  constructor(
    public srvCita: CitasService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  Guardar (){
    console.log(this.fecha);
    this.srvCita.InsertCita(this.placa, this.fecha).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl('/home');
    })
  }

}
