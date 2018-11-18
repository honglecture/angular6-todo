import { TestBed } from '@angular/core/testing';

import { TodoDetailResolverService } from './todo-detail-resolver.service';

describe('TodoDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoDetailResolverService = TestBed.get(TodoDetailResolverService);
    expect(service).toBeTruthy();
  });
});
