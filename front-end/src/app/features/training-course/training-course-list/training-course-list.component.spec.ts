import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCourseListComponent } from './training-course-list.component';
import { TrainingCourseService } from 'src/app/shared/services/training-courses/training-course.service';

describe('TrainingCourseListComponent', () => {
  let component: TrainingCourseListComponent;
  let fixture: ComponentFixture<TrainingCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TrainingCourseListComponent
      ],
      providers: [
        TrainingCourseService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display two training course rows', async () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const rows = compiled.querySelector('table.training-course tbody tr');
    expect(rows.length === 2).toBeTrue();
    expect(rows).toContain('front-end app is running!');
  });
});
