import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-list-insert',
  templateUrl: './todo-list-insert.component.html',
  styleUrls: ['./todo-list-insert.component.css']
})
export class TodoListInsertComponent implements OnInit {

  content:string;
  @Output() insertTodo = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {}

  insert(){
    if(this.content.trim() === '')
      return;
    this.insertTodo.emit(this.content);
    this.content = '';
  }

}
