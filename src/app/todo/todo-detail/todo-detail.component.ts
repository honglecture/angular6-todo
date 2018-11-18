import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todo:Todo;

  constructor(private route: ActivatedRoute, private todoService:TodoService, private location: Location) { }

  ngOnInit() {
    this.getResolvedData();
  }

  private getResolvedData(){
    const resolvedData = <{todo: Todo}>this.route.snapshot.data;
    this.todo = resolvedData.todo;
  }

  goBack(){
   this.location.back();
  }

}
