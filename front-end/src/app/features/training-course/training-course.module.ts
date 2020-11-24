import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingCourseListComponent } from './training-course-list/training-course-list.component';
import { TrainingCourseRoutingModule } from './training-course-routing.module';
import { TrainingCourseCreateComponent } from './training-course-create/training-course-create.component';



@NgModule({
  declarations: [
    TrainingCourseListComponent,
    TrainingCourseCreateComponent
  ],
  imports: [
    CommonModule,
    TrainingCourseRoutingModule
  ]
})
export class TrainingCourseModule { }
