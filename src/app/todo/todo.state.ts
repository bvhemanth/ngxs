import { State, Action, Selector, StateContext } from '@ngxs/store';
import * as action from './todo.actions';
import produce from "immer";

export interface TodoStateModel {
  items: string[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    items: []
  }
})
export class TodoState {

  @Selector()
  public static getState(state: TodoStateModel) {
    console.log(state);
    return state.items;
  }

  @Action(action.TodoAction)
  public add({getState, patchState }: StateContext<any>, actions : action.TodoAction) {  
    const stateModel = getState();
    patchState({ items: [...stateModel.items, actions.payload]});
  }

  @Action(action.deleteAction)
  public Remove(ctx: StateContext<any>, payload: action.deleteAction) {
    console.log(payload +", "+ JSON.stringify(ctx))
    const stateModel = ctx.getState();
  }

}
