import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/services/game/game.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass']
})
export class InventoryComponent implements OnInit {

  constructor(private _service: GameService) { }

  ngOnInit(): void {
  }

}
