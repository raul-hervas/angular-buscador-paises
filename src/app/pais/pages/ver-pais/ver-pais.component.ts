import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';
import { PaisInputComponent } from '../../componets/pais-input/pais-input.component';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.servicio.buscarPorCodigo(id)),
        tap(console.log)
      )
      .subscribe((paises) => (this.pais = paises[0]));

    /*this.activatedRoute.params.subscribe(({ id }) => {
      this.servicio.buscarPorCodigo(id).subscribe(
        (pais) => {
          console.log(pais[0]);
        },
        (err) => {}
      );

      console.log(id);
    });*/
  }
}
