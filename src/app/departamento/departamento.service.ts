import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from './departamento';

@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {
  private url: string = 'https://django-api-dsi.onrender.com/empleados/';
  constructor(private http: HttpClient) {}

  // obtener Departamentos
  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.url + '/departamento/');
  }

  // metodo que permite crear nuevo Departamento
  create(departamento: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(
      this.url + '/departamento/',
      departamento
    );
  }

  // metodo que obtiene un solo Departamento
  get(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(this.url + '/departamento/' + id);
  }

  // metodo para actualizar Departamento
  update(departamento: Departamento): Observable<Departamento> {
    return this.http.put<Departamento>(
      this.url + '/departamento/' + departamento.id + '/',
      departamento
    );
  }
  // metodo para eliminar Departamento
  delete(id?: number): Observable<Departamento> {
    return this.http.delete<Departamento>(this.url + '/departamento/' + id);
  }
}
