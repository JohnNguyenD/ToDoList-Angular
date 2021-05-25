import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
})
export class ShowListComponent implements OnInit {
  todos!: Todo[];
  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: false,
      },
      {
        content: 'Third todo',
        completed: false,
      },
    ];
  }

  updateTask(id: number) {
    this.todos.map((item, index) => {
      if (id == index) item.completed = !item.completed;

      return item;
    });
  }

  deleteTask(id: number) {
    this.todos = this.todos.filter((item, index) => index !== id);
  }

  addTodo() {
    const alert = <HTMLElement>document.querySelector('#notiInput');

    if (this.inputTodo == '') {
      alert.style.display = 'block';
      alert.innerHTML = "This can't be leave blank";
    } else {
      this.todos.push({
        content: this.inputTodo,
        completed: false,
      });
      this.inputTodo = '';
      alert.innerHTML = '';
    }
  }
}
