import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('filds', 'name,population,capital,flags');
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}?fields`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarPorCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarPorCodigo(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${termino}`;

    return this.http.get<Country[]>(url);
  }

  buscarPorRegion(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${termino}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
