import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQuestionsComponent } from './delete-questions.component';

describe('DeleteQuestionsComponent', () => {
  let component: DeleteQuestionsComponent;
  let fixture: ComponentFixture<DeleteQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
