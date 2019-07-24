import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosService } from './todos/todos.service';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
