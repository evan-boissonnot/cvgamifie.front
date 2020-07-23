import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingCourseListComponent } from './training-course-list/training-course-list.component';
import { TrainingCourseRoutingModule } from './training-course-routing.module';



@NgModule({
  declarations: [TrainingCourseListComponent],
  imports: [
    CommonModule,
    TrainingCourseRoutingModule
  ]
})
export class TrainingCourseModule { }
