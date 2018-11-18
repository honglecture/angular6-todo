import { TestBed } from '@angular/core/testing';

import { TodoListResolverService } from './todo-list-resolver.service';

describe('TodoListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoListResolverService = TestBed.get(TodoListResolverService);
    expect(service).toBeTruthy();
  });
});
