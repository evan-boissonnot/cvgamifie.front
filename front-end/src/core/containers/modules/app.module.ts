import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../components/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentModule } from '../../../app/features/students/student/student.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule // 07/10/2020, see to lazy load the module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
