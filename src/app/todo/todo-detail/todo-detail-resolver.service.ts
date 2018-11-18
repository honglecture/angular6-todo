import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Injectable()
export class TodoDetailResolverService implements Resolve<Todo> {

  constructor(private todoService:TodoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
   const id = route.params['id'];
   return this.todoService.get(id);
  }

}
