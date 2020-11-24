import { TrainingCourseListComponent } from './training-course-list/training-course-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingCourseCreateComponent } from './training-course-create/training-course-create.component';

const routes: Routes = [
  {
    path: 'training-course', component: TrainingCourseListComponent
  },
  {
    path: 'training-course/create', component: TrainingCourseCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TrainingCourseRoutingModule { }
