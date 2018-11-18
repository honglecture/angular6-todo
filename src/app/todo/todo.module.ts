import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListInsertComponent } from './todo-list/todo-list-insert/todo-list-insert.component';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoService } from './todo.service';
import { FormsModule } from '@angular/forms';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { TodoDetailResolverService } from './todo-detail/todo-detail-resolver.service';

@NgModule({
  declarations: [TodoDetailComponent, TodoListComponent, TodoListInsertComponent, TodoComponent, TodoListItemComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [TodoService]
})
export class TodoModule { }