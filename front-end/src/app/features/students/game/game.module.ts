import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ],
  exports: [
    InventoryComponent
  ]
})
export class GameModule { }
