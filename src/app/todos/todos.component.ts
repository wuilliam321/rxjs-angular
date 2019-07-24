import { Component } from '@angular/core';
import { TodosService } from './todos.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  allTodos$ = this.todosService.allTodos$;

  constructor(private todosService: TodosService) { }
}
