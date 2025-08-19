import { Component, inject, OnInit, signal } from '@angular/core';
import { Todoss } from '../services/todos'
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit {
  todoServices = inject(Todoss)
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoServices.getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      ).subscribe((todos) => {
        this.todoItems.set(todos)
      })
    // console.log(this.todoServices.todoItems);
    // this.todoItems.set(this.todoServices.todoItems)
  }

  updateTodoItem(todoItem : Todo){
    this.todoItems.update((todos) =>{
      return todos.map((todo)=>{
        if(todo.id === todoItem.id){
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    })
  }
}
