import { Injectable } from '@angular/core';
import { ApiGatewayService } from '../core/api-gateway.service';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {

  private todoUrl = 'todo'

  constructor(private apiGatewayService:ApiGatewayService) { }

  get(id:number):Observable<Todo>{
    return this.apiGatewayService.get<Todo>(`${this.todoUrl}/get/${id}`);
  }

  getList():Observable<Todo[]>{
    return this.apiGatewayService.get<Todo[]>(`${this.todoUrl}/list`);
  }

  insert(todo:Todo):Observable<Todo>{
    return this.apiGatewayService.post<Todo>(`${this.todoUrl}/insert`, JSON.stringify(todo));
  }

  delete(id:number):Observable<Todo>{
    return this.apiGatewayService.delete(`${this.todoUrl}/delete/${id}`);
  }

  complate(todo:Todo):Observable<Todo>{
    return this.apiGatewayService.put(`${this.todoUrl}/complate`, JSON.stringify(todo));
  }

  update(todo:Todo):Observable<Todo>{
    return this.apiGatewayService.put(`${this.todoUrl}/update`, JSON.stringify(todo));
  }

}
