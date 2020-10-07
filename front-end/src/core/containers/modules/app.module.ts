import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../components/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { GameModule } from '../../../app/features/students/game/game.module';
import { StudentModule } from '../../../app/features/students/student/student.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameModule, // 07/10/2020, see to lazy load the module
    StudentModule // 07/10/2020, see to lazy load the module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
