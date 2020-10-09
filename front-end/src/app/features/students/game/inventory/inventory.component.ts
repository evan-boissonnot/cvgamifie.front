import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/services/game/game.service';
import { Observable } from 'rxjs';
import { Game } from 'src/app/core/models/game';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass']
})
export class InventoryComponent implements OnInit {
  game$: Observable<Game>;

  constructor(private _service: GameService) { }

  ngOnInit(): void {
    this.game$ = this._service.selectOnResume(1);
  }

}
