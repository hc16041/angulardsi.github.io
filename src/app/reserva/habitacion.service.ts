import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caracteristicas } from './caracteristicas';
import { Habitacion } from './habitacion';

@Injectable({
  providedIn: 'root',
})
export class HabitacionService {
  getHabitacion() {
    throw new Error('Method not implemented.');
  }
  private url: string = 'https://django-api-dsi.onrender.com/habitacion/';
  private url2: string =
    'https://django-api-dsi.onrender.com/habitacion/caracteristica/';
  constructor(private http: HttpClient) {}

  // obtiene una lista de habitacion de la base
  getAll(): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>(this.url + '/habitacion/');
  }

  getCaracteristicas(): Observable<Caracteristicas[]> {
    return this.http.get<Caracteristicas[]>(this.url2);
  }

  // metodo que permite crear nuevo Habitacion
  create(Habitacion: Habitacion): Observable<Habitacion> {
    return this.http.post<Habitacion>(this.url + '/habitacion/', Habitacion);
  }

  // metodo que obtiene un solo Habitacion
  get(id: number): Observable<Habitacion> {
    return this.http.get<Habitacion>(this.url + '/habitacion/' + id);
  }

  // metodo para actualizar Habitacion
  update(Habitacion: Habitacion): Observable<Habitacion> {
    return this.http.put<Habitacion>(
      this.url + '/habitacion/' + Habitacion.id + '/',
      Habitacion
    );
  }
  // metodo para eliminar Habitacion
  delete(id?: number): Observable<Habitacion> {
    return this.http.delete<Habitacion>(this.url + '/habitacion/' + id);
  }
}
