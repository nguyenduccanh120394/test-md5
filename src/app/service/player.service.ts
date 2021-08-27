import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';
import {Player} from '../model/player';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(API_URL + '/players');
  }

  saveBook(player: Player): Observable<Player>{
    return this.http.post<Player>(API_URL + '/players', player);
  }

  findById(id: number): Observable<Player> {
    return this.http.get<Player>(`${API_URL}/players/${id}`);
  }

  updatePlayer(id: number, player: Player) {
    return this.http.put<Player>(`${API_URL}/players/${id}`, player);
  }

  deletePlayer(id: number) {
    return this.http.delete<Player>(`${API_URL}/players/${id}`);
  }
}
