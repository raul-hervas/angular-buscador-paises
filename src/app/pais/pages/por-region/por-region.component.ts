import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private servicio: PaisService) {}

  activarRegion(region: string) {
    this.regionActiva = region;
    if (region !== this.regionActiva) this.paises = [];

    this.servicio.buscarPorRegion(this.regionActiva).subscribe((paises) => {
      this.paises = paises;
    });

    //TODO: llamar al servidio para traer paises
  }

  getClaseCSS(region: string) {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  getPaises() {}
}
