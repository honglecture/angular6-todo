import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Injectable()
export class TodoListResolverService implements Resolve<Todo[]> {

  private todos:Todo[];

  constructor(private todoService:TodoService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
   return this.todoService.getList();
  }
}