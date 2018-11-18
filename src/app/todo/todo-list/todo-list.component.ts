import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private route: ActivatedRoute, private todoService:TodoService) { }

  ngOnInit() {
    this.getResolvedData();
  }

  getList(){
    this.todoService.getList().subscribe(
      todos => this.todos = todos
    );
  }

  insert(content:string){
    let todo  = new Todo();
    todo.Content = content;
    todo.Writer = 'flwj';
    this.todoService.insert(todo).subscribe(
      todo=> this.todos = [todo, ...this.todos]
    );
  }

  delete(todo:Todo){
    this.todos = this.todos.filter(t=> t !== todo);
    this.todoService.delete(todo['id']).subscribe();
  }

  complete(todo:Todo){
    todo['isCompleted'] = !todo['isCompleted'];
    this.todoService.complate(todo).subscribe();
  }

  update(todo:Todo){
    this.todoService.update(todo).subscribe();
  }

  completeAll(){
    this.todos.forEach(todo=>{
      todo['isCompleted'] = true;
      this.todoService.complate(todo).subscribe();
    });
  }

  private getResolvedData(){
    const resolvedData = <{list: Todo[]}>this.route.snapshot.data;
    resolvedData.list.forEach(todo=>{
      this.todos.push(todo);
    });
  }
}
