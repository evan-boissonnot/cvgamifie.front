import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { TrainingCourseListComponent } from './training-course-list.component';
import { TrainingCourseService } from 'src/app/shared/services/training-courses/training-course.service';

describe('TrainingCourseListComponent', () => {
  let component: TrainingCourseListComponent;
  let fixture: ComponentFixture<TrainingCourseListComponent>;

  beforeEach(waitForAsync(() => {
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

  it('should go to training create', fakeAsync(() => {
    fixture.detectChanges();

    const spy = spyOn(component, 'goToNewTrainingCourse');

    const button = fixture.nativeElement.querySelector('button.create');
    expect(button).toBeTruthy();

    button.click();
    tick();

    expect(component.goToNewTrainingCourse).toHaveBeenCalled();
  }));
});
