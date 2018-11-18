import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListInsertComponent } from './todo-list-insert.component';

describe('TodoListInsertComponent', () => {
  let component: TodoListInsertComponent;
  let fixture: ComponentFixture<TodoListInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
