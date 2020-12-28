import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

import { TodoAction, deleteAction } from './todo/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stores';

  constructor(private store: Store){}

  add() {
    this.store.dispatch(new TodoAction({name:this.title}));
  }

  remove(){
    this.store.dispatch(new deleteAction(2));
  }
}
