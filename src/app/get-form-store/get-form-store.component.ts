import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Store,Select} from '@ngxs/store';
import { TodoState } from '../todo/todo.state';
@Component({
  selector: 'app-get-form-store',
  templateUrl: './get-form-store.component.html',
  styleUrls: ['./get-form-store.component.scss']
})
export class GetFormStoreComponent implements OnInit {

  data$: Observable<any[]>;
  
  constructor(private store: Store) {
    this.store.select(state => state.todo.items).
    subscribe((data) => {
      this.data$= data;
      console.log(data);
    });
  }
  
  ngOnInit(): void {}

}
