import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCourseCreateComponent } from './training-course-create.component';

describe('TrainingCourseCreateComponent', () => {
  let component: TrainingCourseCreateComponent;
  let fixture: ComponentFixture<TrainingCourseCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCourseCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCourseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
