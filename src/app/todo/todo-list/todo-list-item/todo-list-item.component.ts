import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo:Todo;
  status:string = 'normal'
  content:string;

  @Output() deleteTodo = new EventEmitter<Todo>();
  @Output() complateTodo = new EventEmitter<Todo>();
  @Output() updateTodo = new EventEmitter<Todo>();

  constructor(private todoService:TodoService) { }
  ngOnInit() {
    this.content = this.todo['content'];
  }

  delete(){
    this.deleteTodo.emit(this.todo);
  }

  complate(){
    this.complateTodo.emit(this.todo);
  }

  update(){
    if(this.content.trim()==='')
      return;
    this.todo['content'] = this.content;
    this.updateTodo.emit(this.todo);
    this.cancel();
  }

  cancel(){
    this.status = 'normal'
  }

  editForm(){
    this.status = 'edit'
  }

}
