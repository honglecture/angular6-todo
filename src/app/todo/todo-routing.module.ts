import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoComponent } from './todo.component';
import { TodoListResolverService } from './todo-list/todo-list-resolver.service';
import { TodoDetailResolverService } from './todo-detail/todo-detail-resolver.service';
import { AuthGuard } from '../core/auth.guard';

const routes: Routes = [
  { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] , children: [
    {path: '',  pathMatch: 'full', redirectTo: 'list'},
    {path: 'list', component: TodoListComponent, resolve: {list: TodoListResolverService}},
    {path: 'detail/:id', component: TodoDetailComponent, resolve: {todo: TodoDetailResolverService}}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TodoListResolverService, TodoDetailResolverService]
})
export class TodoRoutingModule { }
