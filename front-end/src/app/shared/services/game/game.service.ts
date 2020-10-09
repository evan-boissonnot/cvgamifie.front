import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from '../../../core/models/game';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }

  selectOnResume(id: number): Observable<Game> {
    return this.httpClient.get<Game>(`${environment.apis.games.url}/game/${id}`);
  }
}
