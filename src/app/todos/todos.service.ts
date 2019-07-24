import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';

const API_URL = 'https://my-json-server.typicode.com/wuilliam321/typicode-custom/';

@Injectable()
export class TodosService {
  allTodos$: Observable<Todo[]>;

  constructor(private http: HttpClient) {
    this.allTodos$ = this.getAllTodos();
  }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get(API_URL + '/todos').pipe(
      map(data => data as Todo[])
    );
  }

}
