import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GameModule } from '../game/game.module';
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    GameModule
  ],
  exports: [
    HomeComponent
  ]
})
export class StudentModule { }
