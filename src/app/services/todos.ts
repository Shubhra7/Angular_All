import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Todoss {
  http = inject(HttpClient)
  // todoItems: Array<Todo> = [{
  //   userId: 1,
  //   completed: false,
  //   title: 'groceries',
  //   id: 0,
  // },
  // {
  //   userId: 1,
  //   completed: false,
  //   title: 'carwash',
  //   id: 1,
  // }];
  getTodosFromApi(){
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url)
  }
}
