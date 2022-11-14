import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url: string = 'https://django-api-dsi.onrender.com/users';
  constructor(private http: HttpClient) {}

  // obtiene una lista de usuario de la base
  getAll(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }

  // metodo que permite crear nuevo usuario
  create(Users: Users): Observable<Users> {
    return this.http.post<Users>(this.url + '/', Users);
  }

  // metodo que obtiene un solo usuario
  get(id: number): Observable<Users> {
    return this.http.get<Users>(this.url + '/' + id);
  }

  // metodo para actualizar usuario
  update(Users: Users): Observable<Users> {
    return this.http.put<Users>(this.url + '/' + Users.id + '/', Users);
  }
  // metodo para eliminar usuario
  delete(id?: number): Observable<Users> {
    return this.http.delete<Users>(this.url + '/' + id);
  }
}
