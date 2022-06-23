import {Component, OnInit} from '@angular/core';
import {CitasService} from './services/citas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  citas: any = [];
  numPlacas: any = -1;
  placaInput: any = '';
  constructor(
    public srvCitas: CitasService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  Buscar(){
    this.srvCitas.GetPlaca(this.placaInput).subscribe((resp: any) => {
      this.numPlacas = resp.length;
      this.citas = resp;
      console.log(this.citas);
    });
  }

  GoNuevaCita() {
    this.router.navigateByUrl('/crear');
  }
}
