import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GameRoutingModule } from './game-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { MissionComponent } from './mission/mission.component';
import { QuestComponent } from './quest/quest.component';

@NgModule({
  declarations: [
    InventoryComponent,
    MissionComponent,
    QuestComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  exports: [
    InventoryComponent
  ]
})
export class GameModule { }
