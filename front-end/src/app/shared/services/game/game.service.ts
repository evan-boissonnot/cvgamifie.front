import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from '../../../core/models/game';
import { environment } from 'src/environments/environment';

/**
 * Service to get all data from api, about game
 */
@Injectable({
  providedIn: 'root'
})
export class GameService {

  //#region Constructors
  constructor(private httpClient: HttpClient) { }
  //#endregion

  //#region Public methods
  /**
   * Selects one game by its id
   * @param id number to find a game
   */
  selectOnResume(id: number): Observable<Game> {
    return this.httpClient.get<Game>(`${environment.apis.games.url}/game/${id}`);
  }
  //#endregion
}
